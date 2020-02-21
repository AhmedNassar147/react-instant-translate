"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * the Function exclude lang object from parsed langs
 */
exports.excludeLang = function (langs, langName) {
    var newLangs;
    var exLang;
    var langsJsObj;
    if (typeof langs === "string") {
        langsJsObj = JSON.parse(langs);
    }
    else {
        langsJsObj = langs;
    }
    if (langsJsObj.hasOwnProperty(langName)) {
        var _a = langsJsObj, _b = langName, excludedLang = _a[_b], otherLangs = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        newLangs = otherLangs;
        exLang = excludedLang;
    }
    return {
        // @ts-ignore
        newLangs: newLangs,
        // @ts-ignore
        exLang: exLang
    };
};
/**
 * langs are the whole translations in string
 * storedLang the current lnag object
 * activeLangName the current lang name
 */
exports.switchLangs = function (langs, storedLang, activeLangName) {
    var _a = exports.excludeLang(langs, activeLangName), exLang = _a.exLang, newLangs = _a.newLangs;
    return {
        activeLang: exLang,
        storeLangs: JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, newLangs), storedLang))
    };
};
//# sourceMappingURL=helper.js.map