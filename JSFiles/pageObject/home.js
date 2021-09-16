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
exports.Home = void 0;
const protractor_1 = require("protractor");
const helper_1 = require("../helper/helper");
class Home {
    constructor($el = protractor_1.$("body")) {
        this.$el = $el;
        this.website = protractor_1.browser.get("http://demo.owasp-juice.shop/#/");
        this.dismissWelcome = this.$el.element(protractor_1.by.css("button[aria-label='Close Welcome Banner']"));
        this.numberOfItems = this.$el.$("#mat-select-value-1");
        this.itemsDisplayed = this.$el.$$(".mat-grid-list mat-grid-tile");
        this.dropDownNumPages = this.$el.$$("#mat-select-0-panel mat-option");
        this.buttonDropDownPages = this.$el.$("#mat-select-0");
    }
    checkEachPagesDropDown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helper.checkThePresence(this.buttonDropDownPages);
            yield this.buttonDropDownPages.click();
            return this.dropDownNumPages.count();
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFDL0UsNkNBQXVDO0FBRXZDLE1BQWEsSUFBSTtJQVNiLFlBQTZCLE1BQXNCLGNBQUMsQ0FBQyxNQUFNLENBQUM7UUFBL0IsUUFBRyxHQUFILEdBQUcsQ0FBNEI7UUFQNUQsWUFBTyxHQUFTLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFRMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUssc0JBQXNCOztZQUN4QixNQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUN2RCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN0QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUN4QyxDQUFDO0tBQUE7Q0FFSjtBQXZCRCxvQkF1QkMifQ==