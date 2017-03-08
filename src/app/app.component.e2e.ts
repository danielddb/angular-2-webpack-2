import { browser, by, element } from 'protractor';

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'Angular With Webpack';
        expect(subject).toEqual(result);
    });

    it('should have <my-app>', () => {
        let subject = element(by.css('app-root')).isPresent();
        let result = true;
        expect(subject).toEqual(result);
    });

});