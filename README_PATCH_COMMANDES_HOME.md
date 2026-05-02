# Patch — Home allégée + commandes admin

## Ce que ça change

### Accueil
- Supprime les 3 bulles sous le texte principal : sélection claire, etc.
- Supprime les bulles des derniers ajouts dans le hero, même sur PC.
- Garde la grande image principale et le reste de la home.

### Admin commandes
- Ajoute un bouton `Supprimer` sur chaque commande.
- Ajoute une confirmation navigateur avant suppression définitive.
- Affiche dans chaque article de commande le `Nom image`, utile si le prix est présent dans le nom du fichier.

### Upload / commandes futures
- Les futurs uploads enregistrent le nom original de l’image dans le champ interne `Product.name`.
- Le site public ne l’affiche pas.
- Quand une commande est créée, l’admin récupère le nom de l’image depuis le produit / publicId Cloudinary / URL si possible.

## Installation

1. Dézipper ce patch.
2. Copier les dossiers `app` et `components` dans ton projet.
3. Accepter le remplacement des fichiers.
4. Lancer :

```bash
npm run dev
```

5. Tester :
- page d’accueil
- création d’une commande
- admin commandes
- suppression d’une commande

6. Si tout est OK :

```bash
npm run build
git add .
git commit -m "Update home and admin orders"
git push
```

## Note importante
Les anciennes commandes ne peuvent afficher le vrai nom d’image que si l’info existait déjà au moment de la commande. Pour les nouvelles commandes, le patch essaie de récupérer le nom depuis la base / Cloudinary publicId.
