"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var context_1 = tslib_1.__importDefault(require("./Provider/context"));
var Provider_1 = tslib_1.__importDefault(require("./Provider"));
exports.Provider = Provider_1.default;
var localization_1 = tslib_1.__importDefault(require("./localization"));
var localize = new localization_1.default();
var useLocalize = function () {
    var _a = react_1.useContext(context_1.default), langName = _a.state.langName, setActiveLang = _a.setActiveLang;
    var setLang = react_1.useCallback(function (lngName) {
        if (lngName) {
            setActiveLang({
                langName: lngName
            });
        }
    }, [setActiveLang]);
    var langValues = localize.getLangData.bind(localize)(langName);
    return tslib_1.__assign({ setLang: setLang }, langValues);
};
exports.useLocalize = useLocalize;
var initTranslations = localize.initTranslations.bind(localize);
exports.initTranslations = initTranslations;
//# sourceMappingURL=index.js.map