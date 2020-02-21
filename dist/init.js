"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var initLocalization = function (translations, defaultLang) {
    var deflang = defaultLang
        ? defaultLang.toString()
        : Object.keys(translations)[0];
    var _a = helper_1.excludeLang(translations, deflang), exLang = _a.exLang, newLangs = _a.newLangs;
    var langs = JSON.stringify(newLangs);
    var activeLang = deflang;
    var lang = exLang;
    return function (langName) {
        var lngName = langName ? langName.toString() : deflang;
        if (langName && langName !== activeLang) {
            var _a = helper_1.switchLangs(langs, lang, lngName), activeLangObj = _a.activeLang, storeLangs = _a.storeLangs;
            lang = activeLangObj;
            langs = storeLangs;
            activeLang = lngName;
        }
        return {
            lang: lang,
            activeLang: activeLang
        };
    };
};
exports.default = initLocalization;
//# sourceMappingURL=init.js.map