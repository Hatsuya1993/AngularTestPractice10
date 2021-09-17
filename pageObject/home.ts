import { $, browser, by, ElementArrayFinder, ElementFinder } from "protractor";
import {Presence} from "../helper/presence"

export class Home {

    website : any = browser.get("https://demoqa.com/")
    allCards : ElementArrayFinder
    title: ElementFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.allCards = this.$el.$$(".home-body .top-card")
        this.title = this.$el.$("a[href*=demoqa]")
    }

}