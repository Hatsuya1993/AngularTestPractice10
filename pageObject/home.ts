import { $, browser, by, ElementArrayFinder, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import {Presence} from "../helper/presence"

export class Home {

    website : any = browser.get("https://demoqa.com/")
    allCards : ElementArrayFinder
    title: ElementFinder
    banner: ElementFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.allCards = this.$el.$$(".home-body .top-card")
        this.title = this.$el.$("a[href*=demoqa]")
        this.banner = this.$el.$("img.banner-image")
    }

    async countTabs () : Promise<number> {
        const tabsOpened = await browser.getAllWindowHandles()
        return tabsOpened.length
    }

}