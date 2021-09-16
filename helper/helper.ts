import { browser, ElementFinder, protractor } from "protractor";

export class Helper {

    static async checkThePresence(data : ElementFinder) {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(data), 5000)
    }

}