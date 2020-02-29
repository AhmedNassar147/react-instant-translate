"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Localize = /** @class */ (function () {
    function Localize() {
        this.translations = "";
        this.activeLang = "";
        this.isRtl = false;
        this.langData = {};
    }
    Localize.prototype.initLang = function (trans, lngname) {
        if (!lngname || !Object.keys(trans).includes(lngname)) {
            lngname = Object.keys(trans)[0];
        }
        this.activeLang = lngname;
        var langData = trans[lngname];
        this.isRtl = langData.isRtl;
        this.langData = langData.lang;
    };
    Localize.prototype.initTranslations = function (translations, defaultLang) {
        if (!translations ||
            (!Array.isArray(translations) && !Object.keys(translations).length)) {
            console.error("Translations Not Found");
        }
        else {
            this.translations = JSON.stringify(translations);
            this.initLang(translations, defaultLang);
        }
    };
    Localize.prototype.getLangData = function (langName) {
        if (this.translations) {
            var langData = JSON.parse(this.translations)[langName || this.activeLang];
            this.isRtl = langData.isRtl;
            this.langData = langData.lang;
            this.activeLang = langName;
        }
        return {
            currentTranslation: this.langData,
            activeLang: this.activeLang || langName,
            isRtl: this.isRtl
        };
    };
    return Localize;
}());
exports.default = Localize;
//# sourceMappingURL=localization.js.map