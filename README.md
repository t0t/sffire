## SFFIRE
Single Page Webapp basada en ES6 y React que ataca una base de datos Firebase (BaaS).

<!-- www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup -->

:scream:
- [DEMO hosted in Firebase](https://sergiofores.firebaseapp.com)
- [DEMO hosted in gh-pages](http://t0t.github.io/ssfire)

## Divide y vencerás
- Firebase BaaS (Backend as a service)
    - Datos en tiempo real por Websockets
    - Te olvidas del Backend (el lado oscuro)
    - Gratis hasta 100 usuarios simultaneos
    - Usa JSON !
    - AUTH y usuarios of course...
    - 1Gb hosting gratis
- FrontEnd
  - Javascript ES6
  - React, flux...

## Conceptos
- Arquitectura MVC (Model View Controller)
- Estudio de ideas Domain-driven design
- Remote data and Authentication with Firebase.
- Isomorphic rendering of Firebase data.
- Convenciones:
  - camelCase
  - BEM-style CSS components

### Entorno local
- Webpack (bundle, uglify, livereloading, etc)
- CSS Preprocesado con Sass.
- ES6 transcompilado con Babel
- Versiones con Git
- Dev dependencies con Node-NPM

### El package.json

* `~ npm start`: Arranca webpack en modo desarrollo. Para ver tu página, accede a [http://localhost:3000/dist/main](http://localhost:3000/dist/main)
* `~ npm run build` Compila el código para distribuirlo en producción
* `~ npm run clean` Limpia la carpeta `dist`, en la que se generan los archivos en modo producción.
* `~ npm run fenix` Limpia la carpeta `node_modules` y realiza una instalación limpia de todas las dependencias npm.
* `~ npm run deploy` Publica en gh-pages
* `~ firebase deploy` Publica en Firebase con las firebase tools
