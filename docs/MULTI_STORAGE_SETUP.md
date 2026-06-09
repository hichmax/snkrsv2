# Configuration multi-stockage

Le guide détaillé et à jour se trouve dans
[`docs/IMAGE_HOSTING_PROVIDERS.md`](./IMAGE_HOSTING_PROVIDERS.md). Le code accepte
`R2_BUCKET` comme nom recommandé et conserve `R2_BUCKET_NAME` comme alias historique.

Le studio d'upload permet de choisir, image par image ou lot par lot :

- **Cloudflare R2** : stockage principal recommandé pour le catalogue ;
- **Supabase Storage** : stockage secondaire simple à administrer ;
- **Cloudinary** : à réserver aux visuels qui bénéficient de ses transformations.

Les fichiers sont envoyés directement du navigateur vers l'hébergeur via une URL
signée. Les secrets restent côté serveur et le serveur Next.js ne transporte pas les
images.

## 1. Appliquer la migration

En local :

```bash
npx prisma migrate dev
```

En production :

```bash
npx prisma migrate deploy
```

La migration conserve les produits existants. Les produits possédant déjà un
`cloudinaryPublicId` sont automatiquement marqués comme hébergés par Cloudinary.

## 2. Cloudflare R2

1. Créer un bucket, par exemple `snkrs-catalog`.
2. Créer un token API R2 avec lecture et écriture sur ce bucket.
3. Activer un domaine public R2 ou, de préférence, un domaine custom comme
   `media.votre-domaine.fr`.
4. Ajouter une règle CORS sur le bucket :

```json
[
  {
    "AllowedOrigins": [
      "http://localhost:3000",
      "https://votre-site.fr"
    ],
    "AllowedMethods": ["GET", "PUT", "HEAD"],
    "AllowedHeaders": ["Content-Type"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Variables :

```env
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=snkrs-catalog
R2_PUBLIC_BASE_URL=https://media.votre-domaine.fr
R2_STORAGE_LIMIT_BYTES=10737418240
```

## 3. Supabase Storage

1. Créer un bucket public, par exemple `catalog`.
2. Copier l'URL du projet, la clé `anon` et la clé `service_role`.
3. Ne jamais exposer la clé `service_role` dans une variable `NEXT_PUBLIC_*`.

Variables :

```env
SUPABASE_URL=https://votre-projet.supabase.co
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=catalog
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_STORAGE_LIMIT_BYTES=1073741824
```

## 4. Cloudinary

Variables :

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_STORAGE_LIMIT_BYTES=26214400000
```

Le studio n'utilise plus le widget Cloudinary. Il signe directement chaque upload,
ce qui donne la même expérience pour les trois hébergeurs.

## 5. Lecture des capacités

Dans `Admin > Studio upload` :

- Cloudinary remonte son utilisation réelle via son Admin API quand elle est disponible ;
- R2 et Supabase affichent le volume des images suivies par le catalogue ;
- les limites R2 et Supabase viennent des variables `*_STORAGE_LIMIT_BYTES`.

Les quotas configurés doivent correspondre à votre abonnement. L'utilisation suivie
par le catalogue ne compte pas les fichiers ajoutés manuellement hors de l'admin.

## 6. Répartition recommandée

- **R2 par défaut** pour toutes les photos produit ;
- **Supabase** comme réserve ou pour séparer une collection ;
- **Cloudinary** pour les hero images et campagnes nécessitant des transformations.

Cette répartition réduit le risque qu'un seul quota rende tout le catalogue invisible.
