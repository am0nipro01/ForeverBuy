# E-Commerce ForeverBuy

**Projet** : Site e-commerce complet utilisant le stack MERN (MongoDB, Express, React, Node).  
But : avoir une application fonctionnelle avec front-end, back-end, authentification, paiement, gestion des produits & commandes.

![ecran](.\src\assets\ecran.png)
---

## Table des matières

- [Fonctionnalités](#fonctionnalités)  
- [Technologies](#technologies)  
- [Prérequis](#prérequis)  
- [Installation](#installation)  

---

## Fonctionnalités

Voici ce que comprend ce projet :

- Inscription / connexion utilisateur  
- Rôles utilisateur (ex : user / admin)  
- Catalogue de produits : liste, détail  
- Recherche / filtres produits (prix, catégorie, etc.)  
- Panier d’achat : ajout / suppression / modification quantité  
- Checkout & intégration paiement (Stripe / PayPal / autre)  
- Gestion des commandes : historique utilisateur / dashboard admin  
- Upload d’images pour les produits  
- Sécurité de base : hash des mots de passe, routes protégées  
- Interface réactive (responsive)  

---

## Technologies

| Composant | Technologies utilisées probables |
|--|--|
| Front-end | React, React Router, Axios (ou fetch), bibliothèque d’UI (ex : Material-UI, Bootstrap, Tailwind) |
| Back-end | Node.js, Express |
| Base de données | MongoDB |
| Authentification | JWT |
| Paiement | Stripe ou PayPal ou équivalent |
| Stockage fichiers (images) | Local ou service externe (ex : Cloudinary) |
| Environnement de dev | Node version X, npm ou yarn |

---

## Prérequis

Avant de lancer le projet, il te faut :

- Node.js (version ≥ X)  
- npm ou yarn  
- MongoDB installé localement ou accès à une base distante  
- Compte API pour le service de paiement que tu utilises  
- Eventuellement service d’hébergement d’images si pas local  

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/TON_UTILISATEUR/NOM_DU_REPO.git
cd NOM_DU_REPO

# Installer backend
cd backend
npm install

# Installer frontend
cd ../frontend
npm install
