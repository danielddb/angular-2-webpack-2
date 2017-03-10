# Technologies

* Module bundling - [Webpack 2](https://webpack.js.org/)
* JS Framework - [Angular 2](https://angular.io/)
* JS State Management - [@ngrx/store](https://github.com/ngrx/store) (based on Redux) and [@ngrx/effects] (Side effect model for @ngrx/store)
* JS Linting - [TS Lint](https://palantir.github.io/tslint/) using [JavaScript Standard Style](http://standardjs.com/) rules 
* Style - [Stylus](http://stylus-lang.com/)
* E2E Tests - [Protractor](http://www.protractortest.org/)
* Unit Tests - [Karma](https://karma-runner.github.io/) & [Jasmine](https://jasmine.github.io/)

# Quick start

Make sure you have [Node](https://nodejs.org/) version >= 5.0 and [Yarn](https://yarnpkg.com/en/docs/install#windows-tab]) >= 0.21 installed on your machine.

```bash
# Clone the repo
git clone https://github.com/danielddb/angular-2-webpack-2.git

# install the repo with npm 
yarn install

# start the local server
yarn start

# go to http://127.0.0.1:8080 or http://localhost:8080 in your browser
```

# Main commands

`yarn start` to start up webpack dev server and the mock server (proxied from http://localhost:3000 to http://localhost:8080/mocks).

`yarn run start:prod` to build webpack assets in production mode and start up http-server.

`yarn test` to unit test `*.spec.ts` code using Karma & Jasmine.

`yarn run e2e` to end-to-end test `*.e2e.ts` code using Protractor.

# To be added...

* Karma coverage