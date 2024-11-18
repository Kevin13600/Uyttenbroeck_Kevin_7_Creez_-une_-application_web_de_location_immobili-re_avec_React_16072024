# Kasa - Application de location immobilière

## Structure du projet
```
kasa/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── Collapse.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Host.jsx
│   │   ├── Layout.jsx
│   │   ├── Logo.jsx
│   │   ├── Rating.jsx
│   │   ├── Router.jsx
│   │   ├── Slideshow.jsx
│   │   └── Tag.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Home.jsx
│   │   ├── Logement.jsx
│   │   └── NotFound.jsx
│   ├── sass/
│   │   ├── base/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── main.scss
│   ├── data/
│   ├── App.js
│   └── index.js
└── README.md
```

## Technologies
- React 18
- React Router 6
- Sass
- Create React App

## Fonctionnalités
- Affichage des locations
- Carrousel d'images
- Menu déroulant (Collapse)
- Navigation entre pages
- Design responsive
- Gestion des erreurs 404

## Installation
```bash
npm install
npm start
```

## Routes
- `/` : Page d'accueil
- `/logement/:id` : Page de logement
- `/about` : À propos
- `*` : Page d'erreur 404

## Composants
- Slideshow : Carrousel d'images avec navigation
- Collapse : Menu déroulant animé
- Card : Carte de logement
- Banner : Bannière avec image
- Rating : Système de notation
- Tag : Étiquettes de caractéristiques

## Validation
- W3C HTML/CSS
- React PropTypes
- Responsive design
- Animations CSS