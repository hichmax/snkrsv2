# Sneakers Addict V2 — multi-stockage / motion commerce

Refonte complète pensée pour :
- **Next.js App Router**
- **PostgreSQL + Prisma**
- **Cloudinary + Cloudflare R2 + Supabase Storage** pour l'upload massif
- **admin custom** avec bulk actions
- **front premium** streetwear / chic / motion design

## 1) Démarrage local

```bash
cp .env.example .env.local
docker compose up -d
npm install
npx prisma generate
npx prisma db push
npm run seed
npm run dev
```

Admin:
- `http://localhost:3000/admin/login`

Front:
- `http://localhost:3000`

## 2) Mot de passe admin

Définis `ADMIN_PASSWORD` dans `.env.local`.

## 3) Stockage des images

Renseigne :
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

Le studio d'upload signé est prêt côté admin :
- `Admin > Studio upload`

Configuration complète :
- [`docs/MULTI_STORAGE_SETUP.md`](docs/MULTI_STORAGE_SETUP.md)
- [`docs/CATALOGUE_REIMPORT_GUIDE.md`](docs/CATALOGUE_REIMPORT_GUIDE.md)

## 4) Structure de catalogue

Hiérarchie :
- catégories
- marques
- modèles
- produits (1 photo = 1 produit)
- tailles

## 5) UX livrée dans cette V2

### Client
- landing premium avec hero animé
- navigation catégorie > marque > modèle
- page modèle en **photo-first**
- panier latéral
- demande de commande sans paiement
- design mobile/desktop

### Admin
- dashboard KPI
- gestion structure (catégories / marques / modèles)
- upload multi-images Cloudinary
- création auto des produits après upload
- bulk publish / hide / delete
- gestion des commandes entrantes

## 6) Points forts techniques
- upload direct navigateur vers l'hébergeur choisi
- signatures générées côté serveur, secrets jamais exposés
- capacité et volume suivi visibles dans l'admin
- Prisma pour les relations et migrations
- code organisé pour passer ensuite sur Vercel sans refonte
