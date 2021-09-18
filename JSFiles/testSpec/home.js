"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const home_1 = require("../pageObject/home");
const click_1 = require("../helper/click");
describe('Test demoqa', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let home = new home_1.Home();
        yield home.website;
        yield protractor_1.browser.sleep(5000);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('demoqa');
    }));
    it('Check the number of cards', () => __awaiter(void 0, void 0, void 0, function* () {
        const home = new home_1.Home();
        expect(yield home.allCards.count()).toBe(6);
    }));
    it('Check when the title is pressed, it returns to the homepage', () => __awaiter(void 0, void 0, void 0, function* () {
        const home = new home_1.Home();
        yield click_1.Click.clickLink(home.title);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('demoqa');
    }));
    fit('Check when the banner is clicked, it will open a new tab', () => __awaiter(void 0, void 0, void 0, function* () {
        const home = new home_1.Home();
        yield home.banner.click();
        expect(yield home.countTabs()).toBe(1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsNkNBQTBDO0FBQzFDLDJDQUFxQztBQUVyQyxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUV6QixVQUFVLENBQUMsR0FBUSxFQUFFO1FBQ2pCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDbEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFDLEdBQVEsRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFRLEVBQUU7UUFDeEMsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJCQUEyQixFQUFFLEdBQVMsRUFBRTtRQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFBO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2REFBNkQsRUFBRSxHQUFTLEVBQUU7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUN2QixNQUFNLGFBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQywwREFBMEQsRUFBRSxHQUFRLEVBQUU7UUFDdEUsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUN2QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDekIsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9