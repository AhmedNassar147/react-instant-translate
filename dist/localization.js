"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var init_1 = tslib_1.__importDefault(require("./init"));
var Localization = /** @class */ (function () {
    function Localization() {
        var _this = this;
        this.updater = function (langs, lName) {
            var requestUpdateLang = init_1.default(langs, lName);
            var _a = requestUpdateLang(lName), activeLang = _a.activeLang, _b = _a.lang, lang = _b.lang, isRtl = _b.isRtl;
            _this.activeLang = activeLang;
            _this.isRtl = isRtl;
            _this.langData = lang;
        };
        this.activeLang = "";
        this.isRtl = false;
        this.langData = {};
        this.translations = "";
    }
    Localization.prototype.initTranslations = function (translations, defaultLang) {
        this.translations = JSON.stringify(translations);
        this.updater(translations, defaultLang);
    };
    Localization.prototype.getLangData = function (langName) {
        this.updater(JSON.parse(this.translations), langName);
        return {
            currentTranslation: this.langData,
            activeLang: this.activeLang,
            isRtl: this.isRtl
        };
    };
    return Localization;
}());
exports.default = Localization;
//# sourceMappingURL=localization.js.map