# Configuration images : Cloudinary, Supabase Storage et Cloudflare R2

Le projet possède déjà un routeur multi-stockage dans `Admin > Studio upload`.
Chaque fichier est envoyé directement du navigateur vers l'hébergeur choisi avec
une autorisation temporaire générée côté serveur. Les secrets ne sont jamais envoyés
au navigateur.

## Architecture actuelle

- `lib/storage.ts` prépare les uploads signés, lit les capacités et supprime les fichiers.
- `app/api/admin/uploads/prepare` vérifie l'admin, le type, la taille et l'hébergeur.
- `app/api/admin/uploads/complete` enregistre le produit et les métadonnées dans Neon.
- `app/api/admin/storage/providers` fournit les états/capacités au Studio upload.
- `Product.imageUrl` reste l'URL utilisée par le catalogue.
- `Product.storageProvider`, `storageKey`, `mediaBytes` et `mediaMimeType` permettent de
  suivre et supprimer correctement chaque image.
- `cloudinaryPublicId` est conservé pour la compatibilité avec l'ancien catalogue.

## Variables locales et Vercel

Copier `.env.example` vers `.env.local` en local et renseigner les valeurs sans jamais
les envoyer dans Git.

Dans Vercel :

1. Ouvrir le projet.
2. Aller dans `Settings > Environment Variables`.
3. Ajouter les mêmes variables pour `Production` et `Preview` selon les besoins.
4. Relancer un déploiement après toute modification.

Variables secrètes, uniquement côté serveur :

- `DATABASE_URL`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SALT`
- `CLOUDINARY_API_SECRET`
- `R2_SECRET_ACCESS_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`

Configuration non secrète mais gardée côté serveur par cette application :

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `R2_ACCOUNT_ID`
- `R2_ACCESS_KEY_ID`
- `R2_BUCKET`
- `R2_ENDPOINT`
- `R2_PUBLIC_BASE_URL`
- `SUPABASE_URL`
- `SUPABASE_STORAGE_BUCKET`

Variables volontairement publiques :

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- les URLs publiques d'images déjà enregistrées dans la base

Ne jamais créer de variable `NEXT_PUBLIC_*` contenant une clé service role, un secret
Cloudinary, un secret R2 ou une URL Neon avec mot de passe.

Références officielles :

- [Variables d'environnement Vercel](https://vercel.com/docs/environment-variables)
- [Gestion des variables Vercel](https://vercel.com/docs/environment-variables/managing-environment-variables)

## Neon

Neon stocke le catalogue, les métadonnées des images et les demandes de commande. Les
fichiers eux-mêmes restent chez Cloudinary, Supabase ou R2.

1. Dans Neon, ouvrir le projet puis `Connect`.
2. Copier une connexion poolée dans `DATABASE_URL` pour l'application Vercel.
3. Conserver une connexion directe hors Git pour les migrations Prisma si la connexion
   poolée refuse une opération de schéma.
4. Appliquer les migrations avant de déployer une modification de schéma :

```bash
npx prisma migrate deploy
```

La connexion poolée est adaptée aux fonctions serverless ; les opérations de migration
peuvent nécessiter une connexion directe.

Références :

- [Neon avec Prisma](https://neon.com/docs/guides/prisma)
- [Migrations Prisma avec Neon](https://neon.com/docs/guides/prisma-migrations)

## Cloudflare R2

Variables :

```env
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_ENDPOINT=https://ACCOUNT_ID.r2.cloudflarestorage.com
R2_PUBLIC_BASE_URL=https://media.votre-domaine.fr
R2_STORAGE_LIMIT_BYTES=
```

`R2_BUCKET_NAME` reste accepté comme ancien alias, mais `R2_BUCKET` est recommandé.

Étapes :

1. Créer un bucket R2.
2. Créer un token R2 limité en lecture/écriture à ce bucket.
3. Connecter un domaine public personnalisé au bucket, recommandé pour la production.
4. Ajouter une règle CORS autorisant localhost, le domaine de production et les domaines
   Preview Vercel réellement utilisés.

Exemple CORS :

```json
[
  {
    "AllowedOrigins": ["http://localhost:3000", "https://votre-site.fr"],
    "AllowedMethods": ["GET", "PUT", "HEAD"],
    "AllowedHeaders": ["Content-Type"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3600
  }
]
```

Les URLs pré-signées utilisent l'endpoint S3 R2. `R2_PUBLIC_BASE_URL` sert uniquement à
construire l'URL publique finale.

Références :

- [API S3 R2](https://developers.cloudflare.com/r2/api/s3/api/)
- [URLs pré-signées R2](https://developers.cloudflare.com/r2/api/s3/presigned-urls/)
- [CORS R2](https://developers.cloudflare.com/r2/buckets/cors/)
- [Bucket public et domaine personnalisé](https://developers.cloudflare.com/r2/buckets/public-buckets/)

## Supabase Storage

Variables :

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=catalog
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_STORAGE_LIMIT_BYTES=
```

Étapes :

1. Créer un bucket public `catalog` ou adapter `SUPABASE_STORAGE_BUCKET`.
2. Copier l'URL projet, la clé publique `anon` et la clé serveur `service_role`.
3. Ne jamais exposer la clé `service_role`.
4. Le serveur utilise `service_role` pour créer une URL d'upload signée ; le navigateur
   utilise ensuite uniquement le token temporaire et la clé `anon`.

Un bucket public autorise la lecture publique, pas automatiquement les uploads directs.
Le flux signé actuel évite d'ouvrir une politique d'upload publique générale.

Références :

- [Supabase Storage](https://supabase.com/docs/guides/storage)
- [Contrôle d'accès Storage](https://supabase.com/docs/guides/storage/security/access-control)
- [Clés API Supabase](https://supabase.com/docs/guides/getting-started/api-keys)

## Cloudinary

Variables :

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_STORAGE_LIMIT_BYTES=
```

Le frontend n'a pas besoin de `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` ni d'un upload preset
pour le Studio actuel. Le serveur signe l'upload avec le secret et renvoie seulement les
champs temporaires nécessaires.

Références :

- [Trouver les identifiants Cloudinary](https://cloudinary.com/documentation/finding_your_credentials_tutorial)
- [Upload API Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference)
- [Admin API Cloudinary](https://cloudinary.com/documentation/admin_api)

## Choix de l'hébergeur et capacités

Dans `Admin > Studio upload`, choisir une carte hébergeur avant l'import :

- R2 : recommandé par défaut pour le volume du catalogue.
- Supabase : réserve secondaire ou collections séparées.
- Cloudinary : visuels nécessitant transformations/CDN Cloudinary.

Cloudinary remonte son stockage réel via son Usage API quand disponible. R2 et Supabase
affichent le volume suivi dans Neon. Les variables `*_STORAGE_LIMIT_BYTES` servent de
limites visuelles et doivent correspondre au forfait réel.

## Panne, quota dépassé et fallback

Le fallback est volontairement manuel : un upload ne bascule jamais silencieusement vers
un autre fournisseur, afin d'éviter de perdre le contrôle des coûts et de la destination.

Si un upload échoue :

1. Les fichiers restent en erreur dans la file du Studio.
2. Sélectionner un autre hébergeur configuré.
3. Relancer l'import ; seules les entrées en attente ou en erreur sont retentées.

Si Cloudinary dépasse son quota, ne pas supprimer les anciennes URLs de la base. Basculer
les nouveaux imports vers R2 ou Supabase, puis migrer progressivement les anciennes images.

## Migration progressive sans casser les images

1. Ne jamais remplacer une URL existante avant que la nouvelle URL publique fonctionne.
2. Importer la photo vers le nouvel hébergeur depuis le Studio.
3. Vérifier le produit et son URL publique.
4. Mettre à jour/remplacer l'ancien produit seulement après validation.
5. Conserver `storageProvider` et `storageKey` cohérents avec l'URL.
6. Supprimer l'ancien fichier uniquement après contrôle du catalogue et du panier.

Le champ `EXTERNAL` permet de conserver les anciennes URLs qui ne sont pas encore suivies
par l'un des trois fournisseurs.

## Tests rapides

Pour chaque fournisseur :

1. Vérifier qu'il apparaît `Prêt` dans `Admin > Studio upload`.
2. Importer une petite image WebP/JPG de test.
3. Ouvrir l'URL publique retournée.
4. Vérifier le produit dans le catalogue et dans le panier.
5. Supprimer le produit depuis l'admin et confirmer que le fichier distant disparaît.

Diagnostic :

- `À configurer` : variable manquante ou vide.
- R2 refuse le PUT : contrôler token, bucket, endpoint et CORS.
- URL R2 inaccessible : contrôler `R2_PUBLIC_BASE_URL` et l'accès public.
- Supabase refuse l'upload : contrôler bucket, clés et token signé.
- Cloudinary refuse l'upload : contrôler cloud name, API key/secret et quota.
- Image visible dans le stockage mais absente du catalogue : contrôler `DATABASE_URL` et
  la réponse de `/api/admin/uploads/complete`.
