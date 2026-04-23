# Guide simple de A à Z

## 1. Ce qu'il faut installer

Installe uniquement :
- Node.js LTS
- VS Code
- GitHub Desktop

Tu n'as rien d'autre à installer pour le site.
Tu n'as pas besoin d'installer PostgreSQL en local.
Tu n'as pas besoin d'installer Docker.

## 2. Ouvrir le bon dossier

Le dossier du projet est :
`sneakers-addict-v2`

Dans VS Code, ouvre CE dossier précis.
Tu dois voir :
- `package.json`
- `app`
- `components`
- `prisma`

## 3. Installer les dépendances

Ouvre le terminal dans VS Code puis lance :

```bash
npm install
```

Quand c'est fini, lance :

```bash
npx prisma generate
```

## 4. Vérifier l'environnement

Le projet contient déjà :
- `.env`
- `.env.local`

Ils sont déjà remplis.
Ne change rien pour commencer.

## 5. Lancer le projet en local

```bash
npm run dev
```

Ensuite ouvre :
- site : `http://localhost:3000`
- admin : `http://localhost:3000/admin/login`

## 6. Vérifier la base distante

Le projet est déjà branché à Neon via `DATABASE_URL`.
Pour t'assurer que tout est en place :

```bash
npx prisma db push
```

Si Prisma répond que la base est déjà synchronisée, c'est bon.

Ensuite, pour remettre les données de départ si besoin :

```bash
npm run seed
```

## 7. Tester avant mise en ligne

Fais :

```bash
npm run build
```

Si le build passe, le projet est prêt à être envoyé sur GitHub puis Vercel.

## 8. Créer un nouveau repo GitHub avec GitHub Desktop

### Étapes GitHub Desktop
1. Ouvre GitHub Desktop
2. File -> Add local repository
3. Choisis le dossier `sneakers-addict-v2`
4. Si GitHub Desktop dit que ce n'est pas encore un repo, clique sur `create a repository`
5. En bas à gauche, écris un message de commit
6. Clique `Commit to main`
7. Clique `Publish repository`
8. Garde le repo en Private si tu veux

## 9. Repartir à zéro sur Vercel

1. Supprime l'ancien projet Vercel si tu veux repartir proprement
2. Clique `Add New Project`
3. Import Git Repository
4. Choisis le nouveau repo GitHub
5. Vérifie que le Root Directory est bien `sneakers-addict-v2` si Vercel te le demande
6. Avant le déploiement, ajoute les variables d'environnement du fichier `.env.local`

Variables à mettre dans Vercel :
- `DATABASE_URL`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SALT`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_UPLOAD_PRESET`
- `RESEND_API_KEY`
- `ORDER_NOTIFICATION_EMAIL`
- `ORDER_FROM_EMAIL`

Ensuite clique Deploy.

## 10. Après le déploiement

Teste :
- homepage
- navigation catalogue
- admin login
- création catégorie / marque / modèle
- upload Cloudinary
- ajout panier
- validation commande

## 11. Email de commande

Le code Resend est déjà branché.
Quand une commande est validée, un email doit partir vers l'adresse dans :
- `ORDER_NOTIFICATION_EMAIL`

Si tu changes une variable d'environnement sur Vercel, fais ensuite un Redeploy.

## 12. Workflow normal ensuite

Chaque fois que tu modifies le site :
1. teste en local avec `npm run dev`
2. vérifie avec `npm run build`
3. dans GitHub Desktop : Commit
4. clique `Push origin`
5. Vercel redéploie automatiquement

## 13. Important

Comme les clés sont déjà remplies dans ce projet, pense à les régénérer plus tard si tu veux repartir sur des secrets propres.
