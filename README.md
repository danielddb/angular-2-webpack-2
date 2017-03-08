# Technologies

* Module bundling - Webpack 2
* JS Framework - Angular 2
* Style - Stylus
* E2E Tests - Protractor
* Unit Tests - Karma & Jasmine

# Quick start

Make sure you have Node version >= 5.0 and NPM >= 3.

```bash
# Clone the repo
git clone <REPO-NAME>

# install the repo with npm 
npm install

# start the local server
npm start

# go to http://127.0.0.1:8080 or http://localhost:8080 in your browser
```

Clone the repo.

# Main commands

`npm start` to start up webpack dev server and json-server on (proxied from http://localhost:3000 to http://localhost:8080/mock-api) for mock API data.

`npm run start:prod` to build webpack assets in production mode and start up http-server.

`npm run test` to unit test `*.spec.ts` code using Karma & Jasmine.

`npm run e2e` to end-to-end test `*.e2e.ts` code using Protractor.