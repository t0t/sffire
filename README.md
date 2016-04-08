## SFFIRE Framework
Este es mi propio framework de diseño y desarrollo. Es una Single Page App con arquitectura React/ES6 que consume una base de datos JSON por medio de la API de Firebase.

:scream: [DEMO](http://t0t.github.io/sffire)

## Diseño Web UI
- Wireframing y Guías de estilo
- Animación UI con Principle
- Diseño y Layout con Sketch

## Desarrollo Front-end
- Maquetación "responsive" y animación CSS
- Javascript / ES6 / React
- Preprocesado con Sass

## Buenas prácticas
- Mobile First
- Separation of concerns
- CamelCase, BEM...
- Write well-formed, isolated modules - Reusable Components

### Flujo de trabajo y Entorno local
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

### External Services
  - [Firebase](https://www.firebase.com/) Backend as a Service (BaaS)
  - [Cloudinary](http://cloudinary.com/) Ofrece gestión de imagenes y video en la nube
  - [Formspree](http://formspree.io) Forms Service

Sergio Forés - Web UI Designer & Front-end Developer
[Github](https://github.com/t0t/).
[Linkedin](https://www.linkedin.com/in/sergiofores/).
[Twitter](https://twitter.com/t0tinspire/) :ear_of_rice: Sergio Forés
