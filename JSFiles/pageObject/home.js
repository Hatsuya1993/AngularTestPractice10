"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    constructor($el = protractor_1.$("body")) {
        this.$el = $el;
        this.website = protractor_1.browser.get("https://demoqa.com/");
        this.allCards = this.$el.$$(".home-body .top-card");
        this.title = this.$el.$("a[href*=demoqa]");
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBK0U7QUFHL0UsTUFBYSxJQUFJO0lBTWIsWUFBNkIsTUFBc0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUEvQixRQUFHLEdBQUgsR0FBRyxDQUE0QjtRQUo1RCxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUs5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzlDLENBQUM7Q0FFSjtBQVhELG9CQVdDIn0=