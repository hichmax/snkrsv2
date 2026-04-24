export const siteContent = {
  brand: {
    name: "Sneakers Addict",
    shortName: "SA",
    headerLabel: "Sneakers Addict",
    headerTagline: "Revendeurs premium",
    footerHeadline: "Sélection premium, nouveautés régulières, commande rapide.",
    footerLines: ["Commande sur demande.", "Livraison et disponibilité communiquées après validation."],
    metadataTitle: "Sneakers Addict",
    metadataDescription: "Sélection premium de sneakers et vêtements, catalogue photo-first et commande rapide."
  },
  home: {
    badge: "nouvelle sélection",
    titleLines: ["Catalogue premium", "Sneakers et vêtements", "Commande simplifiée"],
    description:
      "Vous pouvez me retrouver sur mon snap : snkrsaddct. Découvrez les dernières paires, vêtements et accessoires premium ",
    primaryCta: "Explorer le catalogue",
    secondaryCta: "Voir les nouveautés",
    features: [
      {
        title: "Sélection claire",
        text: "Catégories, marques et modèles organisés pour naviguer rapidement."
      },
      {
        title: "Visuels premium",
        text: "Chaque modèle est présenté en galerie photo, sans surcharge inutile."
      },
      {
        title: "Commande rapide",
        text: "Ajoute tes articles au panier et envoie ta demande en quelques secondes."
      }
    ],
    categoriesEyebrow: "collections",
    categoriesTitle: "Explorer par univers",
    categoriesManageLabel: "Voir le catalogue",
    latestProductCountLabel: "visuels disponibles",
    featuredEyebrow: "sélection",
    featuredTitle: "À la une"
  },
  marquee: [
    "Nouveautés régulières",
    "Sélection premium",
    "Visuels détaillés",
    "Commande rapide",
    "Sneakers & vêtements",
    "Collection exclusive"
  ],
  cart: {
    buttonLabel: "Panier",
    drawerEyebrow: "commande",
    drawerTitle: "Votre panier",
    closeLabel: "Fermer",
    emptyText: "Votre panier est vide.",
    introText: "Renseignez vos coordonnées pour envoyer votre demande.",
    successText: "Votre demande a bien été envoyée.",
    errorText: "Impossible d'envoyer votre demande pour le moment.",
    namePlaceholder: "Nom complet *",
    phonePlaceholder: "Téléphone",
    socialPlaceholder: "Instagram / Snapchat",
    cityPlaceholder: "Ville",
    notePlaceholder: "Message / précisions",
    submitLabel: "Envoyer la demande",
    submittingLabel: "Envoi...",
    sizeFallback: "à préciser",
    quantityLabel: "Qté"
  },
  admin: {
    shellTitle: "Administration",
    shellDescription: "Gérez le catalogue, les visuels et les commandes.",
    dashboardTitle: "Tableau de bord",
    dashboardChecklistTitle: "Vue d'ensemble",
    dashboardChecklist: [
      "Structure catégories / marques / modèles",
      "Upload et publication des produits",
      "Gestion des produits visibles",
      "Suivi des commandes reçues"
    ],
    shortcutsTitle: "Accès rapide",
    loginEyebrow: "espace admin",
    loginTitle: "Connexion administration",
    loginDescription: "Accédez à votre espace de gestion.",
    loginHint: "Saisissez votre mot de passe pour continuer.",
    loginButton: "Se connecter"
  }
} as const;
