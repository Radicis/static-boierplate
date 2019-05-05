# Static, Multi-page Webpack Boilerplate

Boilerplate with modern tooling to create static, multi page websites

Based on https://github.com/erickzhao/static-html-webpack-boilerplate


## ✨ Features

- Write SCSS and modern JavaScript code in `src` and build minified, transpiled code for production in `dist`
- Live reloading with webpack-dev-server
- ES6+ to ES5 transpilation, bundling, and minification and seperation of vendor scripts
- SCSS to CSS transpilation, bundling, autoprefixing, and minification
- Automatic copying of HTML and static assets from `src` to `dist` folders
- Linting for styles and scripts

## 🛠 Usage

- Write all your ES2015+ Javascript code in `src/js` and SCSS styling in `src/style`. 
- Store static assets in `src/static`. 
- Organize HTML files the way you like but only at the same directory level right now
- Available commands:
  - `npm run build`: Build files to the `dist` folder to deploy on a host.
  - `npm run dev`: Run `webpack-dev-server` at `localhost:3000`. Includes live reloading.
 - `npm run run lint`: Lints JS with ESLint.
