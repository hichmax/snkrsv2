# Patch commandes admin — image en grand

Ce patch fait 3 choses :

1. Retire toute tentative d'afficher un nom réel d'image dans la partie commandes admin.
2. Rend l'image de chaque article cliquable dans une commande.
3. Ouvre l'image en grand sur la même page, avec :
   - une croix pour fermer ;
   - fermeture en cliquant dans le fond noir ;
   - fermeture avec la touche Échap.

Il conserve aussi le bouton de suppression de commande avec confirmation.

## Installation

Copie les dossiers `app` et `components` dans ton projet, puis accepte de remplacer les fichiers existants.

Ensuite teste :

```bash
npm run dev
```

Vérifie dans `/admin/orders` :

- le nom image n'apparaît plus ;
- cliquer sur une image l'ouvre en grand ;
- cliquer dans le fond noir ferme l'image ;
- la croix ferme l'image ;
- supprimer une commande demande confirmation.

Puis :

```bash
npm run build
git add .
git commit -m "Improve admin order image preview"
git push
```
