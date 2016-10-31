# Angular-systemjs [![Build Status](https://travis-ci.org/david-talabard/Presentations.svg?branch=master)](https://travis-ci.org/david-talabard/angular-systemjs)

Angular project based on version 1.5.8 write in EcmaScript 6.
This is an example with login page and dashboard using Material Design.

This architecture work with :
- Angular components
- Ecmascript 6 syntax with Babel
- Ecmascript 6 modules with SystemJS
- Lazyloading with ocLazyload (JS, HTML, CSS)
- Material Design
- Bundle builds via SystemJS Builder

**Requirements:**
- Install [NodeJS](https://nodejs.org/en/download/ "NodeJS") 
- Install [Git](https://git-scm.com/downloads "Git") 

**Install :**
```
npm install
jspm install
```

**Run :**
```
npm run dev
```

**For production build:**
```
grunt build
```
You can test production build (using bundles) with the following command :
```
npm run build
```

**Tests E2E**

- To have e2e tests, you should install Protractor with the following command :
```
npm install -g protractor
npm install -g protractor-jasmine2-html-reporter
webdriver-manager update
```
By default, drivers for Chrome and Firefox are installed but you can add other drivers...
For more information, see links: [Protractor](http://www.protractortest.org/#/ "Protractor") 


- The tests server can be launch with this command :

```
webdriver-manager start
```

- In other terminal, launch tests:

```
protractor tests/configuration.js --baseUrl="http://localhost:8000"
```
