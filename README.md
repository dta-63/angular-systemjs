# Angular-components

Angular project based on version 1.5.6. This is an example with login page and dashboard using Material Design.
This architecture work with :
- Angular components
- Angular 2 routing
- Modules Lazy loading  (One file is generated for a module folder)
- Grunt optimizations
- Material Design
- Tests E2E with protractor

**Requirements:**
- Install [NodeJS](https://nodejs.org/en/download/ "NodeJS") 
- Install [Git](https://git-scm.com/downloads "Git") 

- Launch the following command lines for a minimal configuration :
```
npm install -g bower 
npm install -g grunt
npm install -g grunt-cli
npm install
bower install
```

- Use this Grunt command for developments, release or jshint
```
grunt serve
grunt build
grunt jshint
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
grunt test
```

