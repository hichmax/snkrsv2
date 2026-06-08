"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { makeSlug } from "@/lib/utils";

type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  heroImage?: string | null;
  accent?: string | null;
  isVisible: boolean;
};

type Brand = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  isVisible: boolean;
  categoryId: string;
  category: { name: string };
};

type ProductModel = {
  id: string;
  name: string;
  slug: string;
  story?: string | null;
  heroImage?: string | null;
  priceHint?: string | null;
  isVisible: boolean;
  brandId: string;
  brand: { name: string; category: { name: string } };
  _count: { products: number };
};

type Props = {
  categories: Category[];
  brands: Brand[];
  models: ProductModel[];
};

type FormState = {
  name: string;
  description: string;
  image: string;
  accent: string;
  parentId: string;
  story: string;
  priceHint: string;
};

const defaultState: FormState = {
  name: "",
  description: "",
  image: "",
  accent: "Lime Flux",
  parentId: "",
  story: "",
  priceHint: "Prix sur demande"
};

export function StructureManager({ categories, brands, models }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categoryForm, setCategoryForm] = useState<FormState>(defaultState);
  const [brandForm, setBrandForm] = useState<FormState>(defaultState);
  const [modelForm, setModelForm] = useState<FormState>(defaultState);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingBrandId, setEditingBrandId] = useState<string | null>(null);
  const [editingModelId, setEditingModelId] = useState<string | null>(null);

  const groupedBrands = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        brands: brands.filter((brand) => brand.categoryId === category.id)
      })),
    [categories, brands]
  );

  function resetCategoryForm() {
    setCategoryForm(defaultState);
    setEditingCategoryId(null);
  }

  function resetBrandForm() {
    setBrandForm(defaultState);
    setEditingBrandId(null);
  }

  function resetModelForm() {
    setModelForm(defaultState);
    setEditingModelId(null);
  }

  function startEditCategory(category: Category) {
    setEditingCategoryId(category.id);
    setCategoryForm({
      name: category.name,
      description: category.description || "",
      image: category.heroImage || "",
      accent: category.accent || "Lime Flux",
      parentId: "",
      story: "",
      priceHint: "Prix sur demande"
    });
  }

  function startEditBrand(brand: Brand) {
    setEditingBrandId(brand.id);
    setBrandForm({
      name: brand.name,
      description: brand.description || "",
      image: brand.imageUrl || "",
      accent: "Lime Flux",
      parentId: brand.categoryId,
      story: "",
      priceHint: "Prix sur demande"
    });
  }

  function startEditModel(model: ProductModel) {
    setEditingModelId(model.id);
    setModelForm({
      name: model.name,
      description: "",
      image: model.heroImage || "",
      accent: "Lime Flux",
      parentId: model.brandId,
      story: model.story || "",
      priceHint: model.priceHint || "Prix sur demande"
    });
  }

  async function send(payload: Record<string, unknown>) {
    setLoading(true);
    const res = await fetch("/api/admin/structure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    setLoading(false);

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      alert(json?.error || "Action impossible.");
      return false;
    }

    router.refresh();
    return true;
  }

  async function saveCategory() {
    if (!categoryForm.name.trim()) {
      alert("Ajoute un nom de catégorie.");
      return;
    }

    await send({
      entity: "category",
      action: editingCategoryId ? "update" : "create",
      id: editingCategoryId,
      data: {
        name: categoryForm.name,
        slug: makeSlug(categoryForm.name),
        description: categoryForm.description,
        heroImage: categoryForm.image,
        accent: categoryForm.accent
      }
    });
  }

  async function saveBrand() {
    if (!brandForm.parentId || !brandForm.name.trim()) {
      alert("Choisis une catégorie et un nom de marque.");
      return;
    }

    await send({
      entity: "brand",
      action: editingBrandId ? "update" : "create",
      id: editingBrandId,
      data: {
        categoryId: brandForm.parentId,
        name: brandForm.name,
        slug: makeSlug(brandForm.name),
        description: brandForm.description,
        imageUrl: brandForm.image
      }
    });
  }

  async function saveModel() {
    if (!modelForm.parentId || !modelForm.name.trim()) {
      alert("Choisis une marque et un nom de modèle.");
      return;
    }

    const parentBrandName = brands.find((brand) => brand.id === modelForm.parentId)?.name || "";

    await send({
      entity: "model",
      action: editingModelId ? "update" : "create",
      id: editingModelId,
      data: {
        brandId: modelForm.parentId,
        name: modelForm.name,
        slug: makeSlug(`${parentBrandName}-${modelForm.name}`),
        story: modelForm.story,
        heroImage: modelForm.image,
        priceHint: modelForm.priceHint
      }
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Arborescence catalogue</h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55">
              {categories.length} catégories · {brands.length} marques · {models.length} modèles
            </span>
          </div>
          <div className="space-y-4">
            {groupedBrands.map((category) => (
              <div key={category.id} className="rounded-[24px] border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-medium">{category.name}</p>
                    <p className="text-sm text-white/45">{category.description || "Sans description"}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => startEditCategory(category)}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => send({ entity: "category", action: "toggle", id: category.id })}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs"
                    >
                      {category.isVisible ? "Masquer" : "Afficher"}
                    </button>
                    <button
                      onClick={() => {
                        if (!confirm(`Supprimer la catégorie ${category.name} et tout son contenu ?`)) return;
                        send({ entity: "category", action: "delete", id: category.id });
                      }}
                      className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs text-red-100"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {category.brands.map((brand) => (
                    <div key={brand.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-medium">{brand.name}</p>
                          <p className="text-xs text-white/45">
                            {models.filter((model) => model.brandId === brand.id).length} modèles
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => startEditBrand(brand)}
                            className="rounded-full border border-white/10 px-3 py-2 text-xs"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => send({ entity: "brand", action: "toggle", id: brand.id })}
                            className="rounded-full border border-white/10 px-3 py-2 text-xs"
                          >
                            {brand.isVisible ? "Masquer" : "Afficher"}
                          </button>
                          <button
                            onClick={() => {
                              if (!confirm(`Supprimer la marque ${brand.name} et tous ses modèles ?`)) return;
                              send({ entity: "brand", action: "delete", id: brand.id });
                            }}
                            className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs text-red-100"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 space-y-2">
                        {models
                          .filter((model) => model.brandId === brand.id)
                          .map((model) => (
                            <div
                              key={model.id}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 px-3 py-2 text-xs text-white/70"
                            >
                              <div>
                                <p className="font-medium text-white">{model.name}</p>
                                <p className="text-[11px] text-white/45">{model._count.products} produits</p>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <button
                                  onClick={() => startEditModel(model)}
                                  className="rounded-full border border-white/10 px-3 py-1.5"
                                >
                                  Modifier
                                </button>
                                <button
                                  onClick={() => send({ entity: "model", action: "toggle", id: model.id })}
                                  className="rounded-full border border-white/10 px-3 py-1.5"
                                >
                                  {model.isVisible ? "Masquer" : "Afficher"}
                                </button>
                                <button
                                  onClick={() => {
                                    if (!confirm(`Supprimer le modèle ${model.name} et toutes ses photos ?`)) return;
                                    send({ entity: "model", action: "delete", id: model.id });
                                  }}
                                  className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-red-100"
                                >
                                  Supprimer
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">
              {editingCategoryId ? "Modifier une catégorie" : "Créer une catégorie"}
            </h3>
            {editingCategoryId ? (
              <button onClick={resetCategoryForm} className="rounded-full border border-white/10 px-3 py-2 text-xs">
                Annuler
              </button>
            ) : null}
          </div>
          <div className="grid gap-3">
            <input
              placeholder="Nom"
              value={categoryForm.name}
              onChange={(e) => setCategoryForm((current) => ({ ...current, name: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <textarea
              placeholder="Description"
              value={categoryForm.description}
              onChange={(e) => setCategoryForm((current) => ({ ...current, description: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              rows={3}
            />
            <input
              placeholder="Image hero (URL)"
              value={categoryForm.image}
              onChange={(e) => setCategoryForm((current) => ({ ...current, image: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <input
              placeholder="Accent"
              value={categoryForm.accent}
              onChange={(e) => setCategoryForm((current) => ({ ...current, accent: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <button
              disabled={loading}
              onClick={saveCategory}
              className="rounded-full bg-lime-300 px-5 py-3 font-semibold text-black"
            >
              {editingCategoryId ? "Enregistrer la catégorie" : "Ajouter la catégorie"}
            </button>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">
              {editingBrandId ? "Modifier une marque" : "Créer une marque"}
            </h3>
            {editingBrandId ? (
              <button onClick={resetBrandForm} className="rounded-full border border-white/10 px-3 py-2 text-xs">
                Annuler
              </button>
            ) : null}
          </div>
          <div className="grid gap-3">
            <select
              value={brandForm.parentId}
              onChange={(e) => setBrandForm((current) => ({ ...current, parentId: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            >
              <option value="">Choisir une catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              placeholder="Nom"
              value={brandForm.name}
              onChange={(e) => setBrandForm((current) => ({ ...current, name: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <textarea
              placeholder="Description"
              value={brandForm.description}
              onChange={(e) => setBrandForm((current) => ({ ...current, description: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              rows={3}
            />
            <input
              placeholder="Image marque (URL)"
              value={brandForm.image}
              onChange={(e) => setBrandForm((current) => ({ ...current, image: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <button
              disabled={loading}
              onClick={saveBrand}
              className="rounded-full bg-white px-5 py-3 font-semibold text-black"
            >
              {editingBrandId ? "Enregistrer la marque" : "Ajouter la marque"}
            </button>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">
              {editingModelId ? "Modifier un modèle" : "Créer un modèle"}
            </h3>
            {editingModelId ? (
              <button onClick={resetModelForm} className="rounded-full border border-white/10 px-3 py-2 text-xs">
                Annuler
              </button>
            ) : null}
          </div>
          <div className="grid gap-3">
            <select
              value={modelForm.parentId}
              onChange={(e) => setModelForm((current) => ({ ...current, parentId: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            >
              <option value="">Choisir une marque</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name} · {brand.category.name}
                </option>
              ))}
            </select>
            <input
              placeholder="Nom"
              value={modelForm.name}
              onChange={(e) => setModelForm((current) => ({ ...current, name: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <textarea
              placeholder="Story"
              value={modelForm.story}
              onChange={(e) => setModelForm((current) => ({ ...current, story: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
              rows={3}
            />
            <input
              placeholder="Hero image (URL)"
              value={modelForm.image}
              onChange={(e) => setModelForm((current) => ({ ...current, image: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <input
              placeholder="Prix indicatif"
              value={modelForm.priceHint}
              onChange={(e) => setModelForm((current) => ({ ...current, priceHint: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 outline-none"
            />
            <button
              disabled={loading}
              onClick={saveModel}
              className="rounded-full bg-white px-5 py-3 font-semibold text-black"
            >
              {editingModelId ? "Enregistrer le modèle" : "Ajouter le modèle"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
