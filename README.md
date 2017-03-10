# Technologies

* Module bundling - Webpack 2
* JS Framework & State Management - Angular 2 & ngrx/store
* Style - Stylus
* E2E Tests - Protractor
* Unit Tests - Karma & Jasmine

# Quick start

Make sure you have [Node](https://nodejs.org/) version >= 5.0 and [Yarn](https://yarnpkg.com/en/docs/install#windows-tab]).

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

`yarn start` to start up webpack dev server and mock server on (proxied from http://localhost:3000 to http://localhost:8080/mocks) for mock API data.

`yarn run start:prod` to build webpack assets in production mode and start up http-server.

`yarn test` to unit test `*.spec.ts` code using Karma & Jasmine.

`yarn run e2e` to end-to-end test `*.e2e.ts` code using Protractor.

# To be added...

* Karma coverage