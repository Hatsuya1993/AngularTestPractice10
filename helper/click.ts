import { browser, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import {Presence} from "./presence"

export class Click {


    static async clickButton(data : ElementFinder) {
        await Presence.checkThePresence(data)
    }

    static async clickLink(data: ElementFinder) {
        await Presence.checkThePresence(data)
        await data.click()
    }

}