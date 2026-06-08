"use client";

import { createClient } from "@supabase/supabase-js";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Cloud,
  Database,
  HardDrive,
  ImagePlus,
  LoaderCircle,
  RefreshCw,
  UploadCloud,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  PreparedUpload,
  StorageProviderId,
  StorageProviderStatus
} from "@/lib/storage-types";

type Category = { id: string; name: string };
type Brand = { id: string; name: string; categoryId: string };
type ProductModel = { id: string; name: string; brandId: string };

type QueueItem = {
  id: string;
  file: File;
  progress: number;
  status: "waiting" | "uploading" | "done" | "error";
  error?: string;
  url?: string;
};

type Props = {
  categories: Category[];
  brands: Brand[];
  models: ProductModel[];
};

const providerIcons = {
  CLOUDINARY: Cloud,
  CLOUDFLARE_R2: HardDrive,
  SUPABASE: Database
} satisfies Record<StorageProviderId, typeof Cloud>;

function formatBytes(bytes: number | null) {
  if (bytes === null) return "quota non renseigné";
  if (bytes === 0) return "0 o";
  const units = ["o", "Ko", "Mo", "Go", "To"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index > 2 ? 2 : 1)} ${units[index]}`;
}

async function responseError(response: Response, fallback: string) {
  const data = await response.json().catch(() => null);
  return data?.error || fallback;
}

export function UploadStudio({ categories, brands, models }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [providers, setProviders] = useState<StorageProviderStatus[]>([]);
  const [selectedProvider, setSelectedProvider] =
    useState<StorageProviderId>("CLOUDFLARE_R2");
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0]?.id || "");
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedModelId, setSelectedModelId] = useState("");
  const [priceText, setPriceText] = useState("Prix sur demande");
  const [sizes, setSizes] = useState("39,40,41,42,43,44");
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [loadingProviders, setLoadingProviders] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const filteredBrands = useMemo(
    () => brands.filter((brand) => brand.categoryId === selectedCategoryId),
    [brands, selectedCategoryId]
  );

  const filteredModels = useMemo(
    () => models.filter((model) => model.brandId === selectedBrandId),
    [models, selectedBrandId]
  );

  const selectedProviderStatus = providers.find((item) => item.id === selectedProvider);
  const completedCount = queue.filter((item) => item.status === "done").length;
  const failedCount = queue.filter((item) => item.status === "error").length;

  useEffect(() => {
    if (!filteredBrands.some((brand) => brand.id === selectedBrandId)) {
      setSelectedBrandId(filteredBrands[0]?.id || "");
    }
  }, [filteredBrands, selectedBrandId]);

  useEffect(() => {
    if (!filteredModels.some((model) => model.id === selectedModelId)) {
      setSelectedModelId(filteredModels[0]?.id || "");
    }
  }, [filteredModels, selectedModelId]);

  async function loadProviders() {
    setLoadingProviders(true);
    const response = await fetch("/api/admin/storage/providers", { cache: "no-store" });
    const data = await response.json().catch(() => ({ providers: [] }));
    const nextProviders = (data.providers || []) as StorageProviderStatus[];
    setProviders(nextProviders);
    setLoadingProviders(false);

    if (!nextProviders.find((item) => item.id === selectedProvider)?.configured) {
      const firstConfigured = nextProviders.find((item) => item.configured);
      if (firstConfigured) setSelectedProvider(firstConfigured.id);
    }
  }

  useEffect(() => {
    void loadProviders();
    // The selected provider is intentionally resolved after the first status load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addFiles(files: FileList | File[]) {
    const valid = Array.from(files).filter(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type) &&
        file.size <= 20 * 1024 * 1024
    );

    setQueue((current) => [
      ...current,
      ...valid.map((file) => ({
        id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
        file,
        progress: 0,
        status: "waiting" as const
      }))
    ]);
  }

  function updateQueue(id: string, patch: Partial<QueueItem>) {
    setQueue((current) =>
      current.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  }

  async function uploadToProvider(file: File, prepared: PreparedUpload) {
    if (prepared.provider === "CLOUDINARY") {
      const formData = new FormData();
      formData.append("file", file);
      Object.entries(prepared.fields).forEach(([key, value]) => formData.append(key, value));
      const response = await fetch(prepared.uploadUrl, { method: "POST", body: formData });
      if (!response.ok) throw new Error("Cloudinary a refusé l'image.");
      const result = await response.json();
      return {
        url: String(result.secure_url),
        storageKey: String(result.public_id || prepared.storageKey)
      };
    }

    if (prepared.provider === "CLOUDFLARE_R2") {
      const response = await fetch(prepared.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file
      });
      if (!response.ok) throw new Error("Cloudflare R2 a refusé l'image.");
      return { url: prepared.publicUrl, storageKey: prepared.storageKey };
    }

    const supabase = createClient(
      prepared.fields.supabaseUrl,
      prepared.fields.supabaseAnonKey
    );
    const { error } = await supabase.storage
      .from(prepared.fields.bucket)
      .uploadToSignedUrl(prepared.storageKey, prepared.fields.token, file, {
        contentType: file.type
      });

    if (error) throw new Error(error.message);
    return { url: prepared.publicUrl, storageKey: prepared.storageKey };
  }

  async function uploadOne(item: QueueItem) {
    updateQueue(item.id, { status: "uploading", progress: 8, error: undefined });

    const prepareResponse = await fetch("/api/admin/uploads/prepare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: selectedProvider,
        modelId: selectedModelId,
        fileName: item.file.name,
        mimeType: item.file.type,
        size: item.file.size
      })
    });

    if (!prepareResponse.ok) {
      throw new Error(await responseError(prepareResponse, "Préparation impossible."));
    }

    const prepared = (await prepareResponse.json()) as PreparedUpload;
    updateQueue(item.id, { progress: 35 });
    const uploaded = await uploadToProvider(item.file, prepared);
    updateQueue(item.id, { progress: 82 });

    const completeResponse = await fetch("/api/admin/uploads/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        modelId: selectedModelId,
        provider: selectedProvider,
        storageKey: uploaded.storageKey,
        secureUrl: uploaded.url,
        originalFilename: item.file.name,
        mediaBytes: item.file.size,
        mediaMimeType: item.file.type,
        priceText,
        sizes
      })
    });

    if (!completeResponse.ok) {
      throw new Error(await responseError(completeResponse, "Enregistrement en base impossible."));
    }

    updateQueue(item.id, { status: "done", progress: 100, url: uploaded.url });
  }

  async function startUpload() {
    if (!selectedModelId || !selectedProviderStatus?.configured || uploading) return;
    const pending = queue.filter((item) => item.status === "waiting" || item.status === "error");
    if (!pending.length) return;

    setUploading(true);
    let cursor = 0;
    const workers = Array.from({ length: Math.min(3, pending.length) }, async () => {
      while (cursor < pending.length) {
        const item = pending[cursor++];
        try {
          await uploadOne(item);
        } catch (error) {
          updateQueue(item.id, {
            status: "error",
            progress: 0,
            error: error instanceof Error ? error.message : "Upload impossible."
          });
        }
      }
    });

    await Promise.all(workers);
    setUploading(false);
    await loadProviders();
  }

  return (
    <div className="space-y-6">
      <section className="admin-panel p-5 md:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="admin-eyebrow">Routeur de médias</p>
            <h3 className="mt-2 text-2xl font-semibold">Choisir l'hébergeur</h3>
            <p className="mt-2 max-w-2xl text-sm text-white/50">
              Chaque image part directement de votre navigateur vers le stockage choisi.
              Le site ne transporte jamais le fichier lourd.
            </p>
          </div>
          <button
            onClick={loadProviders}
            disabled={loadingProviders}
            className="admin-secondary-button"
          >
            <RefreshCw className={`h-4 w-4 ${loadingProviders ? "animate-spin" : ""}`} />
            Actualiser les capacités
          </button>
        </div>

        <div className="mt-6 grid gap-3 xl:grid-cols-3">
          {providers.map((provider) => {
            const Icon = providerIcons[provider.id];
            const selected = selectedProvider === provider.id;
            const percent = provider.limitBytes
              ? Math.min(100, (provider.usedBytes / provider.limitBytes) * 100)
              : 0;

            return (
              <button
                key={provider.id}
                type="button"
                disabled={!provider.configured || uploading}
                onClick={() => setSelectedProvider(provider.id)}
                className={`relative overflow-hidden rounded-[26px] border p-4 text-left transition ${
                  selected
                    ? "border-lime-300/55 bg-lime-300/[0.08]"
                    : "border-white/10 bg-black/25 hover:border-white/20"
                } disabled:cursor-not-allowed disabled:opacity-45`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      provider.configured
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-amber-400/10 text-amber-200"
                    }`}
                  >
                    {provider.configured ? "Prêt" : "À configurer"}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <h4 className="text-lg font-semibold">{provider.label}</h4>
                  {selected ? <Check className="h-4 w-4 text-lime-300" /> : null}
                </div>
                <p className="mt-1 min-h-10 text-xs leading-5 text-white/45">{provider.note}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-lime-300 transition-[width] duration-700"
                    style={{ width: provider.limitBytes ? `${Math.max(percent, 1)}%` : "0%" }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-white/45">
                  <span>{formatBytes(provider.usedBytes)} utilisés</span>
                  <span>{formatBytes(provider.limitBytes)}</span>
                </div>
                <p className="mt-2 text-[11px] text-white/30">
                  {provider.assetCount} images suivies par le catalogue
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="admin-panel p-5 md:p-6">
          <p className="admin-eyebrow">Destination catalogue</p>
          <h3 className="mt-2 text-2xl font-semibold">Classer les images</h3>

          <div className="mt-5 grid gap-3">
            <label className="admin-field">
              <span>Catégorie</span>
              <select
                value={selectedCategoryId}
                onChange={(event) => setSelectedCategoryId(event.target.value)}
              >
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-field">
              <span>Marque</span>
              <select
                value={selectedBrandId}
                onChange={(event) => setSelectedBrandId(event.target.value)}
              >
                {filteredBrands.map((brand) => (
                  <option value={brand.id} key={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-field">
              <span>Modèle</span>
              <select
                value={selectedModelId}
                onChange={(event) => setSelectedModelId(event.target.value)}
              >
                {filteredModels.map((model) => (
                  <option value={model.id} key={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-field">
              <span>Prix affiché</span>
              <input value={priceText} onChange={(event) => setPriceText(event.target.value)} />
            </label>

            <label className="admin-field">
              <span>Tailles, séparées par une virgule</span>
              <input value={sizes} onChange={(event) => setSizes(event.target.value)} />
            </label>
          </div>

          <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-4 text-xs leading-5 text-white/45">
            Un fichier crée un produit. Le nom du fichier devient son nom interne, et toutes
            les images reçoivent les tailles et le prix définis ici.
          </div>
        </section>

        <section className="admin-panel p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="admin-eyebrow">Import massif</p>
              <h3 className="mt-2 text-2xl font-semibold">Déposer les visuels</h3>
            </div>
            {queue.length ? (
              <button
                type="button"
                disabled={uploading}
                onClick={() => setQueue([])}
                className="admin-icon-button"
                aria-label="Vider la file"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="hidden"
            onChange={(event) => event.target.files && addFiles(event.target.files)}
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            onDragEnter={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              addFiles(event.dataTransfer.files);
            }}
            className={`mt-5 flex min-h-52 w-full flex-col items-center justify-center rounded-[28px] border border-dashed px-6 text-center transition ${
              dragging
                ? "border-lime-300 bg-lime-300/[0.08]"
                : "border-white/15 bg-black/20 hover:border-white/30 hover:bg-white/[0.03]"
            }`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 text-black">
              <ImagePlus className="h-6 w-6" />
            </span>
            <span className="mt-4 text-lg font-semibold">Glissez toutes les photos ici</span>
            <span className="mt-2 text-sm text-white/40">
              JPG, PNG, WebP ou AVIF · 20 Mo maximum par image
            </span>
          </button>

          {queue.length ? (
            <div className="mt-5 space-y-2">
              {queue.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-white/8 bg-black/25"
                >
                  <div className="flex items-center gap-3 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                      {item.status === "done" ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      ) : item.status === "error" ? (
                        <AlertCircle className="h-4 w-4 text-red-300" />
                      ) : item.status === "uploading" ? (
                        <LoaderCircle className="h-4 w-4 animate-spin text-lime-300" />
                      ) : (
                        <UploadCloud className="h-4 w-4 text-white/40" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{item.file.name}</p>
                      <p className="mt-1 text-[11px] text-white/35">
                        {item.error || formatBytes(item.file.size)}
                      </p>
                    </div>
                    <span className="text-xs tabular-nums text-white/40">{item.progress}%</span>
                  </div>
                  <div className="h-0.5 bg-white/5">
                    <div
                      className={`h-full transition-[width] duration-500 ${
                        item.status === "error" ? "bg-red-400" : "bg-lime-300"
                      }`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              {queue.length} fichier(s) · {completedCount} terminé(s)
              {failedCount ? ` · ${failedCount} en erreur` : ""}
            </p>
            <button
              onClick={startUpload}
              disabled={
                uploading ||
                !queue.length ||
                !selectedModelId ||
                !selectedProviderStatus?.configured
              }
              className="admin-primary-button"
            >
              {uploading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <UploadCloud className="h-4 w-4" />
              )}
              {uploading ? "Import en cours..." : `Importer vers ${selectedProviderStatus?.label || "..."}`}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
