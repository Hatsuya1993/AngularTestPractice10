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
exports.Helper = void 0;
const protractor_1 = require("protractor");
class Helper {
    static checkThePresence(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.presenceOf(data), 5000);
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0U7QUFFaEUsTUFBYSxNQUFNO0lBRWYsTUFBTSxDQUFPLGdCQUFnQixDQUFDLElBQW9COztZQUM5QyxNQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0tBQUE7Q0FFSjtBQVBELHdCQU9DIn0=