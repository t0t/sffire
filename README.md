## SFFIRE
Single Page App basada en ES6 y React que ataca una base de datos Firebase (BaaS).

:scream: [DEMO](http://t0t.github.io/sffire)

## Divide y vencerás
- Firebase BaaS (Backend as a Service)
    - Datos en tiempo real por Websockets
    - Te olvidas del Backend (el lado oscuro)
    - Gratis hasta 100 usuarios simultaneos
    - Basado en JSON !
    - AUTH y usuarios of course...
    - 1Gb hosting gratis
- FrontEnd
  - Javascript ES6
  - React

## Conceptos
- Arquitectura centrada en las vistas con React
- Isomorphic rendering of Firebase data.
- Convenciones:
  - camelCase, BEM-style y Components

### Entorno local
- Webpack (bundle, uglify, livereloading, etc)
- CSS Preprocesado con Sass.
- ES6 transcompilado con Babel
- Versiones con Git
- Dev dependencies con Node-NPM

### El package.json

* `~ npm start`: Arranca webpack en modo desarrollo en [http://localhost:3000/dist/main](http://localhost:3000/dist/)
* `~ npm run build` Compila el código para distribuirlo en producción
* `~ npm run clean` Limpia la carpeta `dist`, en la que se generan los archivos en modo producción.
* `~ npm run fenix` Limpia la carpeta `node_modules` y realiza una instalación limpia de todas las dependencias npm.
* `~ npm run deploy` Publica en gh-pages
* `~ firebase deploy` Publica en Firebase con las firebase tools

### ToDo

- [ ] Limpiar hash: /dist/#/photos?k=6vcle2
- [ ] Embeber html5 api video/audio
- [x] Terminar la ruta home /
- [x] Implementar Iconos svg
- [x] Menu active class item
- [x] Create an SVG Icon System with React
