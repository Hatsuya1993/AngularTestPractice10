import { $, browser, by, ElementFinder } from "protractor";

export class Home {

    website : any = browser.get("http://demo.owasp-juice.shop/#/")
    dismissWelcome : ElementFinder
    numberOfItems : ElementFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.dismissWelcome = this.$el.element(by.css("button[aria-label='Close Welcome Banner']"))
        this.numberOfItems = this.$el.$("#mat-select-value-1")
    }

}