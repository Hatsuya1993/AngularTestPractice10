import { browser } from 'protractor';
import { Home } from '../pageObject/home';
import {Click} from "../helper/click"

describe('Test demoqa', () => {
    
    beforeEach(async() => {
        browser.waitForAngularEnabled(false);
        let home = new Home()
        await home.website
        await browser.sleep(5000)
    })

    afterEach(async() => {
        await browser.close()
    })

    it('Check if the url is correct', async() => {
        expect(await browser.getCurrentUrl()).toContain('demoqa')
    })

    it('Check the number of cards', async () => {
        const home = new Home()
        expect(await home.allCards.count()).toBe(6)
    })

    it('Check when the title is pressed, it returns to the homepage', async () => {
        const home = new Home()
        await Click.clickLink(home.title)
        expect(await browser.getCurrentUrl()).toContain('demoqa')
    })

})
