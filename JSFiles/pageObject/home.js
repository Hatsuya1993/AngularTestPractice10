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
        this.optionsMulti = this.$el.$$(".category-cards .card-body h5");
    }
    countTabs() {
        return __awaiter(this, void 0, void 0, function* () {
            const tabsOpened = yield protractor_1.browser.getAllWindowHandles();
            return tabsOpened.length;
        });
    }
    optionsCheck(dataEach) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.optionsMulti.count().then((data) => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.executeScript('window.scrollTo(0,500);');
                for (let i = 0; i < data; i++) {
                    yield this.optionsMulti.get(i).getText().then((textEach) => __awaiter(this, void 0, void 0, function* () {
                        if (textEach === dataEach) {
                            console.log(123, textEach === dataEach);
                            yield protractor_1.browser.sleep(5000);
                            yield protractor_1.browser.actions().mouseMove({ x: 158, y: 525 }).click().perform();
                        }
                    }));
                }
            }));
        });
    }
    changeNextTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(this, void 0, void 0, function* () {
                console.log(handles);
                const secondWindowHandle = handles[1];
                yield protractor_1.browser.switchTo().window(secondWindowHandle);
            }));
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFJL0UsTUFBYSxJQUFJO0lBUWIsWUFBNkIsTUFBc0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUEvQixRQUFHLEdBQUgsR0FBRyxDQUE0QjtRQU41RCxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQU85QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLCtCQUErQixDQUFDLENBQUE7SUFDcEUsQ0FBQztJQUVLLFNBQVM7O1lBQ1gsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDdEQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFBO1FBQzVCLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBRSxRQUFnQjs7WUFFaEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLElBQUksRUFBRSxFQUFFO2dCQUMvQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUE7Z0JBQ3RELEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUM7b0JBQ3pCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQU0sUUFBUSxFQUFFLEVBQUU7d0JBQzVELElBQUcsUUFBUSxLQUFLLFFBQVEsRUFBRTs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFBOzRCQUN2QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUN6QixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTt5QkFDdEU7b0JBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtpQkFDTDtZQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7SUFFSyxhQUFhOztZQUNmLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLE9BQU8sRUFBRSxFQUFFO2dCQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNwQixNQUFNLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3ZELENBQUMsQ0FBQSxDQUFDLENBQUE7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQTNDRCxvQkEyQ0MifQ==