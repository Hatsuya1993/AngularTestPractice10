import { $, browser, by, ElementArrayFinder, ElementFinder } from "protractor";
import {Helper} from "../helper/helper"

export class Home {

    website : any = browser.get("http://demo.owasp-juice.shop/#/")
    dismissWelcome : ElementFinder
    numberOfItems : ElementFinder
    itemsDisplayed : ElementArrayFinder
    dropDownNumPages : ElementArrayFinder
    buttonDropDownPages : ElementFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.dismissWelcome = this.$el.element(by.css("button[aria-label='Close Welcome Banner']"))
        this.numberOfItems = this.$el.$("#mat-select-value-1")
        this.itemsDisplayed = this.$el.$$(".mat-grid-list mat-grid-tile")
        this.dropDownNumPages = this.$el.$$("#mat-select-0-panel mat-option")
        this.buttonDropDownPages = this.$el.$("#mat-select-0")
    }

    async checkEachPagesDropDown(){
        await Helper.checkThePresence(this.buttonDropDownPages)
        await this.buttonDropDownPages.click()
        return this.dropDownNumPages.count()
    }

}