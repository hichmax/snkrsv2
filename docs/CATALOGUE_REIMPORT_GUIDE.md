# Refaire le catalogue depuis l'admin

La structure `catégorie > marque > modèle` est séparée des produits. Vous pouvez donc
remettre toutes les photos sans reconstruire les catégories et les modèles.

## Préparation des photos

1. Organiser les fichiers sur votre ordinateur par marque et modèle.
2. Donner un nom clair à chaque fichier, par exemple :
   `air-max-95-neon-face.jpg`.
3. Préférer WebP ou AVIF quand possible.
4. Viser 1600 à 2200 px sur le plus grand côté et moins de 2 Mo par image.

Le nom du fichier devient le nom interne du produit dans l'admin.

## Nettoyer les anciennes photos cassées

1. Ouvrir `Admin > Produits`.
2. Rechercher une marque ou un modèle.
3. Sélectionner les anciennes images Cloudinary cassées.
4. Utiliser **Supprimer**.

La suppression retire le produit de la base et tente aussi de supprimer le fichier
chez l'hébergeur associé. Ne supprimez pas les catégories, marques ou modèles si vous
souhaitez conserver l'arborescence.

## Importer un modèle complet

1. Ouvrir `Admin > Studio upload`.
2. Choisir l'hébergeur. **Cloudflare R2** est recommandé pour le catalogue courant.
3. Vérifier la capacité affichée.
4. Choisir la catégorie, la marque et le modèle.
5. Renseigner le prix et les tailles communes au lot.
6. Glisser toutes les photos du modèle dans la zone d'import.
7. Lancer l'import.
8. Attendre que chaque ligne affiche 100 %.

Le studio envoie jusqu'à trois images en parallèle pour rester rapide sans saturer la
connexion. En cas d'erreur, relancer l'import : seules les lignes en erreur repartent.

## Contrôle après chaque lot

1. Ouvrir la page publique du modèle depuis le site.
2. Vérifier les cadrages, les noms, les tailles et le prix.
3. Ouvrir `Admin > Produits` pour mettre les meilleures images en **Featured**.
4. Vérifier le compteur de capacité avant le lot suivant.

## Ordre conseillé pour reconstruire tout le catalogue

1. Importer d'abord les modèles les plus vendus sur R2.
2. Marquer quatre produits forts comme **Featured** pour alimenter la page d'accueil.
3. Importer les collections secondaires sur Supabase.
4. Remplacer les hero images des catégories, marques et modèles avec les nouvelles URL.
5. Garder Cloudinary pour quelques visuels éditoriaux si son quota redevient disponible.

## En cas d'interruption

Le catalogue est enregistré image par image. Si le navigateur se ferme au milieu d'un
lot, les images déjà marquées à 100 % sont conservées. Reprenez simplement les fichiers
restants.
