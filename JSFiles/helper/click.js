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
exports.Click = void 0;
const presence_1 = require("./presence");
class Click {
    static clickButton(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield presence_1.Presence.checkThePresence(data);
        });
    }
    static clickLink(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield presence_1.Presence.checkThePresence(data);
            yield data.click();
        });
    }
}
exports.Click = Click;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9oZWxwZXIvY2xpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEseUNBQW1DO0FBRW5DLE1BQWEsS0FBSztJQUdkLE1BQU0sQ0FBTyxXQUFXLENBQUMsSUFBb0I7O1lBQ3pDLE1BQU0sbUJBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sU0FBUyxDQUFDLElBQW1COztZQUN0QyxNQUFNLG1CQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDdEIsQ0FBQztLQUFBO0NBRUo7QUFaRCxzQkFZQyJ9