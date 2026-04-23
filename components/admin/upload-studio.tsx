"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Category = { id: string; name: string };
type Brand = { id: string; name: string; categoryId: string };
type ProductModel = { id: string; name: string; brandId: string };

type UploadedItem = {
  publicId: string;
  secureUrl: string;
};

type Props = {
  categories: Category[];
  brands: Brand[];
  models: ProductModel[];
};

export function UploadStudio({ categories, brands, models }: Props) {
  const widgetRef = useRef<any>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0]?.id || "");
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedModelId, setSelectedModelId] = useState("");
  const [priceText, setPriceText] = useState("Prix sur demande");
  const [sizes, setSizes] = useState("39,40,41,42,43,44");
  const [uploaded, setUploaded] = useState<UploadedItem[]>([]);
  const [loading, setLoading] = useState(false);

  const filteredBrands = useMemo(
    () => brands.filter((brand) => brand.categoryId === selectedCategoryId),
    [brands, selectedCategoryId]
  );

  const filteredModels = useMemo(
    () => models.filter((model) => model.brandId === selectedBrandId),
    [models, selectedBrandId]
  );

  useEffect(() => {
    if (!selectedBrandId && filteredBrands[0]) {
      setSelectedBrandId(filteredBrands[0].id);
    }
  }, [filteredBrands, selectedBrandId]);

  useEffect(() => {
    if (!selectedModelId && filteredModels[0]) {
      setSelectedModelId(filteredModels[0].id);
    }
  }, [filteredModels, selectedModelId]);

  useEffect(() => {
    const existing = document.querySelector('script[data-cloudinary-widget="true"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
    script.async = true;
    script.dataset.cloudinaryWidget = "true";
    document.body.appendChild(script);
  }, []);

  async function openWidget() {
    if (!selectedModelId) {
      alert("Choisissez un modèle avant l'import.");
      return;
    }

    if (!window.cloudinary) {
      alert("Le module d'import n'est pas encore chargé.");
      return;
    }

    if (widgetRef.current) {
      widgetRef.current.open();
      return;
    }

    const modelName = filteredModels.find((model) => model.id === selectedModelId)?.name || "modele";
    const brandName = filteredBrands.find((brand) => brand.id === selectedBrandId)?.name || "brand";

    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        multiple: true,
        maxFiles: 100,
        sources: ["local", "camera", "url"],
        showAdvancedOptions: false,
        cropping: false,
        folder: `sneakers-addict/${brandName}/${modelName}`,
        clientAllowedFormats: ["png", "jpg", "jpeg", "webp"],
        styles: {
          palette: {
            window: "#050505",
            windowBorder: "#1b1b1b",
            tabIcon: "#d0ff71",
            menuIcons: "#f2f2f2",
            textDark: "#000000",
            textLight: "#ffffff",
            link: "#d0ff71",
            action: "#d0ff71",
            inactiveTabIcon: "#7a7a7a",
            error: "#ef4444",
            inProgress: "#d0ff71",
            complete: "#d0ff71",
            sourceBg: "#101010"
          },
          fonts: {
            default: null,
            "'Helvetica Neue', Helvetica, sans-serif": {
              url: null,
              active: true
            }
          }
        },
        prepareUploadParams: async (cb: (params: Record<string, unknown>) => void) => {
          const response = await fetch("/api/admin/uploads/sign", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              folder: `sneakers-addict/${brandName}/${modelName}`,
              tags: [brandName, modelName, "sneakers-addict"],
              uploadPreset: ""
            })
          });

          const data = await response.json();
          cb({
            apiKey: data.apiKey,
            signature: data.signature,
            uploadSignatureTimestamp: data.timestamp,
            folder: data.folder,
            tags: data.tags,
            uploadPreset: data.uploadPreset || undefined
          });
        }
      },
      async (error: unknown, result: any) => {
        if (error) {
          console.error(error);
          return;
        }

        if (result?.event === "success") {
          setLoading(true);
          const info = result.info;
          const response = await fetch("/api/admin/uploads/complete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              modelId: selectedModelId,
              priceText,
              sizes,
              secureUrl: info.secure_url,
              publicId: info.public_id,
              originalFilename: info.original_filename
            })
          });

          setLoading(false);

          if (!response.ok) {
            alert("Import effectué, mais l'enregistrement du produit a échoué.");
            return;
          }

          setUploaded((current) => [
            {
              publicId: info.public_id,
              secureUrl: info.secure_url
            },
            ...current
          ]);
        }
      }
    );

    widgetRef.current.open();
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
        <h3 className="text-xl font-semibold">Paramétrage de l'import</h3>
        <p className="mt-2 text-sm text-white/55">
          Sélectionnez la catégorie, la marque et le modèle, puis importez vos visuels.
        </p>

        <div className="mt-5 grid gap-3">
          <select
            value={selectedCategoryId}
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
              setSelectedBrandId("");
              setSelectedModelId("");
            }}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          >
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            value={selectedBrandId}
            onChange={(e) => {
              setSelectedBrandId(e.target.value);
              setSelectedModelId("");
            }}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          >
            <option value="">Choisir une marque</option>
            {filteredBrands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          <select
            value={selectedModelId}
            onChange={(e) => setSelectedModelId(e.target.value)}
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          >
            <option value="">Choisir un modèle</option>
            {filteredModels.map((model) => (
              <option value={model.id} key={model.id}>
                {model.name}
              </option>
            ))}
          </select>

          <input
            value={priceText}
            onChange={(e) => setPriceText(e.target.value)}
            placeholder="Prix affiché"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          />

          <input
            value={sizes}
            onChange={(e) => setSizes(e.target.value)}
            placeholder="Tailles séparées par des virgules"
            className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
          />

          <button
            onClick={openWidget}
            disabled={!selectedModelId}
            className="rounded-full bg-lime-300 px-5 py-3 font-semibold text-black disabled:opacity-40"
          >
            Importer des images
          </button>

          {loading ? (
            <div className="rounded-2xl border border-lime-300/20 bg-lime-300/10 px-4 py-3 text-sm text-lime-100">
              Enregistrement du produit en base...
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Derniers uploads</h3>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
            {uploaded.length} dans cette session
          </span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {uploaded.length ? (
            uploaded.map((item) => (
              <div key={item.publicId} className="overflow-hidden rounded-[24px] border border-white/10 bg-black/25">
                <img src={item.secureUrl} alt="" className="aspect-[4/5] w-full object-cover" />
                <div className="p-4 text-xs text-white/45">{item.publicId}</div>
              </div>
            ))
          ) : (
            <div className="rounded-[24px] border border-dashed border-white/10 p-8 text-sm text-white/55">
              Le studio est prêt. Tes nouveaux visuels apparaîtront ici juste après l’upload.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
