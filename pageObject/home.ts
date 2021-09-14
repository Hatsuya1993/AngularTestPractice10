import { $, browser, by, ElementArrayFinder, ElementFinder } from "protractor";

export class Home {

    website : any = browser.get("http://demo.owasp-juice.shop/#/")
    dismissWelcome : ElementFinder
    numberOfItems : ElementFinder
    itemsDisplayed : ElementArrayFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.dismissWelcome = this.$el.element(by.css("button[aria-label='Close Welcome Banner']"))
        this.numberOfItems = this.$el.$("#mat-select-value-1")
        this.itemsDisplayed = this.$el.$$(".mat-grid-list mat-grid-tile")
    }

}