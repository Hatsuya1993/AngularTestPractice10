import { $, browser, by, ElementArrayFinder, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import {Presence} from "../helper/presence"

export class Home {

    website : any = browser.get("https://demoqa.com/")
    allCards : ElementArrayFinder
    title: ElementFinder
    banner: ElementFinder
    optionsMulti: ElementArrayFinder

    constructor(private readonly $el : ElementFinder = $("body")) {
        this.allCards = this.$el.$$(".home-body .top-card")
        this.title = this.$el.$("a[href*=demoqa]")
        this.banner = this.$el.$("img.banner-image")
        this.optionsMulti = this.$el.$$(".category-cards .card-body h5")
    }

    async countTabs () : Promise<number> {
        const tabsOpened = await browser.getAllWindowHandles()
        return tabsOpened.length
    }

    async optionsCheck (dataEach: string) {

        await this.optionsMulti.count().then(async(data) => {
            await browser.executeScript('window.scrollTo(0,500);')
            for(let i = 0; i < data; i++){
                await this.optionsMulti.get(i).getText().then(async(textEach) => {
                    if(textEach === dataEach) {
                        console.log(123, textEach === dataEach)
                        await browser.sleep(5000)
                        await browser.actions().mouseMove({x:158, y:525}).click().perform()
                    }
                })
            }
        })
    }

    async changeNextTab () {
        await browser.getAllWindowHandles().then(async(handles) => {
            console.log(handles)
            const secondWindowHandle = handles[1];
            await browser.switchTo().window(secondWindowHandle)
        })
    }
}