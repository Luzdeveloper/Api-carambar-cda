# Projet Carambar CDA

Bienvenue dans le projet Carambar CDA. Ce projet est une API qui permet de gérer les données des Carambars.

## Installation

Pour installer le projet, suivez les étapes ci-dessous :

1. Clonez le dépôt :
  git clone <https://github.com/Luzdeveloper/Api-carambar-cda.git>

1. Accédez au répertoire du projet :

  cd backend

1. Installez les dépendances :

  npm install

## Utilisation

Pour utiliser le projet, suivez les étapes ci-dessous :

1. Démarrez le serveur :
  node server.js
2. Accédez à l'API via `http://localhost:3000`.

## Routes de l'API

Voici les différentes routes disponibles pour interagir avec l'API Carambar CDA :

### Obtenir tous les blagues

GET /jokes

### Obtenir une blague par ID

GET /jokes/:id

### Obtenir la blague en aleatoire

GET /jokes/random

### Ajouter une nouvelle blague

POST /jokes
