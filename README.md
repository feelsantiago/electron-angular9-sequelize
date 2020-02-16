[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

# Introduction

Bootstrap and package your project with Angular 9 and Electron (Typescript + SASS + Hot Reload + Sequelize + MySQL) for creating Desktop applications.

Currently runs with:

-   Angular v9.0.0
-   Electron v8.0.0
-   Electron Builder v21.2.0
-   Sequelize v5
-   MySQL2 
## Getting Started

Clone this repository locally :

```bash
git clone https://github.com/maximegris/angular-electron.git
```

Install dependencies with npm :

```bash
npm install
```

Run with:
```bash
npm start
```
## How to configure manually
The challenge to make Sequelize or other database lib work in angular environment is to make sure that webpack will load all libs. In this scenario we don't want that the app runs on a browser, so we can remove all `node_modules` folder from webpack config.

We need to configure [Angular WebPack Builder]([https://www.npmjs.com/package/@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)).

After installing on your project create we going to use the `Custom Webpack Config Function` to extend webpack configs:
```js
// angular.webpack.js file
const nodeExternals =  require('webpack-node-externals');

module.exports  = (config, options) => {
	config.externals = [nodeExternals()];
	return config;
}
``` 
After this you can configure Sequelize as you wish, but make sure that:

- Import you service that initialize database connection on `AppComponent`
- Call `Sequelize.sync()`   on `AppComponent.ngOnInit()` lifecycle method.

See `DatabaseModule` and `AppComponent` on this repository for exemple.
