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
class Home {
    constructor($el = protractor_1.$("body")) {
        this.$el = $el;
        this.website = protractor_1.browser.get("https://demoqa.com/");
        this.allCards = this.$el.$$(".home-body .top-card");
        this.title = this.$el.$("a[href*=demoqa]");
        this.banner = this.$el.$("img.banner-image");
    }
    countTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            const tabsOpened = yield protractor_1.browser.getAllWindowHandles();
            return tabsOpened.length;
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFJL0UsTUFBYSxJQUFJO0lBT2IsWUFBNkIsTUFBc0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUEvQixRQUFHLEdBQUgsR0FBRyxDQUE0QjtRQUw1RCxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQU05QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUssU0FBUzs7WUFDWCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUN0RCxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFDNUIsQ0FBQztLQUFBO0NBRUo7QUFsQkQsb0JBa0JDIn0=