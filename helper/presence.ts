import { browser, ElementFinder, protractor } from "protractor";
import global from "../globalConstants/globalConstants"

export class Presence {

    static async checkThePresence(data : ElementFinder) {
        const EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(data), global["TIMING"]["WAIT_LONG"])
    }

}