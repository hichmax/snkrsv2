# Audit express du projet fourni (RAR)

## Constats techniques trouvés dans l'existant
- le projet mélange plusieurs directions : **Supabase**, **Cloudinary**, **Prisma**, et même un stockage JSON généré localement ;
- il n’y avait pas de vraie page publique `app/page.tsx` utilisable comme base front propre ;
- certaines routes API étaient incohérentes entre elles, avec notamment une route `apply` qui ne correspondait pas à ce que son nom suggère ;
- l’auth admin reposait sur un cookie très simple basé sur le mot de passe brut ;
- le code était plus proche d’un prototype d’import qu’un vrai produit e-commerce orienté catalogue premium ;
- l’import Yupoo était très spécifique et fragile pour une logique de production durable ;
- la structure visuelle admin/front n’était pas encore industrialisée.

## Décision prise pour la V2
J’ai volontairement **reconstruit la base** au lieu de patcher :
- **Next.js App Router**
- **PostgreSQL + Prisma**
- **Cloudinary Upload Widget**
- **admin custom**
- **front photo-first streetwear chic**

## Ce que garde la V2
- hiérarchie catégorie → marque → modèle ;
- panier en mode lead / demande de commande ;
- logique “une image = une variation/article” ;
- admin orienté gestion rapide.

## Ce que change la V2
- plus de dépendance à Supabase Storage ;
- plus de structure hybride JSON / SQL / imports partiels ;
- upload massif via Cloudinary signé côté serveur ;
- design premium cohérent client + admin ;
- vrai socle local-first testable avec Docker Postgres.

## Recommandations ensuite
- brancher un vrai système d’auth admin plus robuste si mise en production ;
- ajouter édition inline des produits (prix, tailles, ordre) ;
- ajouter recherche full-text et filtres avancés ;
- ajouter génération de variantes par lot ;
- brancher ensuite Vercel + base Postgres distante + variables d’environnement prod.
