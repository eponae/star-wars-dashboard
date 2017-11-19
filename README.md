# Consuming [Star Wars Api](https://swapi.co/documentation#start) with [Angular JS 1.6](https://angularjs.org/)

## Usage
### Requirements
* [NodeJS](http://nodejs.org/) v8.9.1 LTS ou v6.12.0 (with [NPM](https://www.npmjs.org/))

## Compatibility
Last versions of Chrome, Firefox or Safari

## Installation
1. Clone the repository: `git clone https://github.com/eponae/star-wars-dashboard.git`
2. Install Node dependencies: `npm install`
3. Start project with source maps for development purpose only: `npm start`
4. Open a browser (Chrome, Firefox or Safari) and go to the url `localhost:4242`

You can build the project without JS source maps and 
with minification : `npm build` and deploy it on your own server.

NB : NodeJS dependencies are automatically installed on `npm build`. 
This npm task launches `npm install` with prebuild task.  

## Development
- AngularJS version : 1.6.6 (components base architecture)
- EcmaScript version : ES6

#### Launch unit tests
Install Node dependencies: `npm install`

To restart tests on code modifications
- `npm test`

To launch tests only once
- `npm run test-single-run`

#### OS compatibility
Linux distribution or MAC OS.

#### Developer tools
- This project uses babel to transpile es6 to es5 to ensure browsers compatibility.
- This project uses Eslint for JavaScript code quality and 
Sasslint for SCSS style quality.
- This project uses Webpack to bundle and serve loaded files in a browser. 
JS, HTML, and SCSS files imported in the application are automatically reloaded 
after saving on development mode.

### Project
#### External modules
[`angular-material`](https://material.angularjs.org/latest/)
[`ui-router`](https://github.com/angular-ui/ui-router)

#### Modules, Routes
Modules are imported in `src/scripts/app.js`
Others configuration aspects can be found in `src/scripts/app-config.js`

#### Ressources
Go to `src/assets` :
    `sass` contains SASS main stylesheets
