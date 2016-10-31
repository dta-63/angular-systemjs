/* global describe, it, browser, expect, element, by */
'use strict';

describe('Login page tests', function () {
    it('access to login page', function () {
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl()).toContain('/login');
        expect(browser.getTitle()).toEqual('Angular with systemjs');
    });


    it('authentication with valid user', function () {
        element(by.model('username')).clear().sendKeys(browser.params.login.username);
        element(by.model('password')).clear().sendKeys(browser.params.login.password);
        $('button.md-primary').click();
        expect(browser.getCurrentUrl()).toContain('/dashboard');
    });

  
});
