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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = void 0;
const protractor_1 = require("protractor");
const globalConstants_1 = __importDefault(require("../globalConstants/globalConstants"));
class Presence {
    static checkThePresence(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.presenceOf(data), globalConstants_1.default["TIMING"]["WAIT_LONG"]);
        });
    }
}
exports.Presence = Presence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9oZWxwZXIvcHJlc2VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWdFO0FBQ2hFLHlGQUF1RDtBQUV2RCxNQUFhLFFBQVE7SUFFakIsTUFBTSxDQUFPLGdCQUFnQixDQUFDLElBQW9COztZQUM5QyxNQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3pDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSx5QkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDMUUsQ0FBQztLQUFBO0NBRUo7QUFQRCw0QkFPQyJ9