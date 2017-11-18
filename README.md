# Consuming [Star Wars Api](https://swapi.co/documentation#start) with [Angular JS 1.6](https://angularjs.org/)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))

### Compatibility
Last versions of Chrome, Firefox or Safari

### Installation
1. Clone the repository: `git clone ...`
3. Start project with source maps for development purpose only: `npm start`
4. Open a browser (Chrome, Firefox or Safari) and go to the url `localhost:4242`

You can build the project without JS source maps and 
with minification : `npm build` and deploy it on your own server.

NB : NodeJS depencies are automatically installed on `npm start` or `npm build`. 
Those npm tasks launch `npm install` with prestart or prebuild.  
### Development

AngularJS version : 1.6.6 (components base architecture)
EcmaScript version : ES6

#### Build compatibility
Linux distribution or MAC OS.

#### Developer tools
- This project uses babel to transpile es6 to es5 to ensure browsers compatibility.
- This project uses Eslint for JavaScript code quality and 
Sasslint for SCSS style quality.
- This project uses Webpack to bundle and serve loaded files in a browser. 
JS, HTML, and SCSS files imported in the application are automatically reloaded 
after saving on development mode.

#### External Modules

[`angular-material`](https://material.angularjs.org/latest/)
[`ui-router`](https://github.com/angular-ui/ui-router)

## Project
### Modules, Routes
Modules are imported in `src/scripts/app.js`
Others configuration aspects can be found in `src/scripts/app-config.js`

### Ressources
Go to `src/assets` :
    - `sass` contains SASS main stylesheets
