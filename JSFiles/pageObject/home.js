"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const protractor_1 = require("protractor");
class Home {
    constructor($el = protractor_1.$("body")) {
        this.$el = $el;
        this.website = protractor_1.browser.get("http://demo.owasp-juice.shop/#/");
        this.dismissWelcome = this.$el.element(protractor_1.by.css("button[aria-label='Close Welcome Banner']"));
        this.numberOfItems = this.$el.$("#mat-select-value-1");
    }
}
exports.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBMkQ7QUFFM0QsTUFBYSxJQUFJO0lBTWIsWUFBNkIsTUFBc0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUEvQixRQUFHLEdBQUgsR0FBRyxDQUE0QjtRQUo1RCxZQUFPLEdBQVMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUsxRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFBO1FBQzNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0NBRUo7QUFYRCxvQkFXQyJ9