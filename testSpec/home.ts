import { browser, protractor, $ } from 'protractor';
import { Home } from '../pageObject/home';

describe('Test owasp-juice.shop', () => {
    
    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
        await home.dismissWelcome.click()
        await browser.sleep(5000)
    })

    afterEach(async() => {
        await browser.close()
    })

    it('Check if the url is correct', async() => {
        expect(await browser.getCurrentUrl()).toContain('owasp-juice')
    })

    it('Check default number of items per list in dropdown is correct', async () => {
        let home = new Home()
        expect(await home.numberOfItems.getText()).toContain('12')
    })

    it('Count the number of items and verify', async () => {
        let home = new Home()
        expect(await home.itemsDisplayed.count()).toBe(12)
    })

})
