/* global exports, browser, jasmine */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/*js'],
    onPrepare: function () {
        'use strict';
        browser.driver.manage().window().setSize(1200, 800);
        return browser.getProcessedConfig().then(function (config) {
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: './reports/' + config.capabilities.browserName + '/',
                screenshotsFolder: 'images',
                consolidate: true,
                consolidateAll: true
            }));
        });
    },
    multiCapabilities: [
        {
            browserName: 'chrome'
        }
     ],
    jasmineNodeOpts: {
        showColors: true
    },
    params: {
        login: {
            username: 'user@live.fr',
            password: 'pwd'
        }
    }
};