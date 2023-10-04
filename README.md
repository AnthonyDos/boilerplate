# Description des outils utilisés dans le projet et explication de l'architecture
-Utilisation des outils:

    -1. HUSKY permet de vérifier et lancé esLint avant les précommit
    -2. ESLINT permet de contrôler la qualité du code, l'indentation etc.
    -3  AXIOS pour les appels à l'api
    -4  REACT pour créé le squelette frontend et mettre en place le serveur. React s'occupe de gérer le virtual DOM.
        Permet de créer des composants réutilisables.
    -5  REDUX pour la gestion d'état des composants.
    -6  REDUX TOOLKIT permet de gérer plus facilement les états des reduceurs.
    -7  GITHUB pour le versonning
    -8  REACT ROUTER DOM permet de créer des applications à page unique (SPA) 
        en facilitant la navigation entre différentes vues ou pages sans avoir à recharger complètement la page.
    -9  SASS est un préprocesseur permettant aux développeurs de créer des feuilles de style CSS de manière plus efficace, 
        en ajoutant des fonctionnalités telles que des variables, des fonctions, des opérations mathématiques, des mixins 
        (morceaux de code réutilisables), des règles de contrôle de flux et bien plus encore.
    -10 JEST pour les tests frontend, utilisé pour les tests unitaires et d'intégration.

### Architecture type que j'utilise pour ma partie frontend
    • PAGES : qui gère l’appel aux données et centralise les composants
    
    • COMPONENTS : qui sera soit un composant réutilisable dans ce cas-là il se situera dans layout,
    sinon ce sera un composant précis pour une certaine demande.
    
    • REDUX : va contenir les actions, le dispatcher et le reducer
    
    • SERVICES : le fichier serviceConstants va contenir les constantes des urls vers l’api et le fichier
    api contiendra les services les appels vers le backend.
    
    • COMMONS : va contenir le dico de sa feature et le style ainsi que tous ce qui peut être utilisé
    dans sa feature
    
    • CONFIG : va contenir la config générale de la partie frontend, la config du combineReducer etc.

# Pour la partie backend si je devrais en créé une, j'utiliserais
    -1  J-UNIT pour les tests unitaires et d'intégration spring boot.
    -2  SWAGGER pour la documentation d'api, permet aux développeurs de pouvoir consommer l'api.
    -3  SPRING SECURITY pour la gestions des credentials,la sécurisation des routes, la vérification de l'utilisateur
    -4  MAVEN pour la gestion des dépendances, facilite le déploiement, génére des rapports etc.
    -5  JSON WEB TOKEN pour la génération d'un token
    -6  VALIDATION pour la gestion d'exceptions pour la validations des données d'entrée d'un objet.
    -7  SPRING DATA JPA qui permet de gérer les requêtes SQL.

# Exemple type d'une architecture SpringBoot que j'utilise
### La partie backend est développé avec le langage Java, j’utilise la librairie Springboot.L’application est développée en couche :
    -1 CONFIG : contient la configuration de l’application comme le cache, la sécurité etc.
    -2 CONTROLLER : permet de recevoir les appels de la partie IHM
    -3 DTO : qui sert à faire un mapping entre l’objet brut qui est en lien direct avec la base de
    données et l’objet dto qui sera envoyé à l’ihm. L’utilisation d’un dto permet de renvoyer les
    données que l’on souhaite exposer ou de retourné un objet plus complet que l’initial.
    -4 EXCEPTIONS : va centraliser les fichiers en lien avec la gestion d’exceptions
    -5 MODELS : va contenir le model de données
    -6 REPOSITORY : lien entre la base de données et le service
    -7 SERVICES : possède deux fichiers, une classe service et une interface service qui fait le lien
    entre son serviceImpl et le controller
    -8 VALIDATORS : qui est une classe de validation d’objet, elle permet de vérifier que l’objet ne
    comporte pas d’erreur avant d’être envoyé en base de données.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
