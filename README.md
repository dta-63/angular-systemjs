# Angular-systemjs

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

**Install & Run:**
```
npm install
jspm install
npm start
```
Browse to http://localhost:8000

**For production build:**
```
grunt build
```

**TODO:**
- fix build forproduction
- http-server reloading for dev
