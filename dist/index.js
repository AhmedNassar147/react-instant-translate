"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var localization_1 = tslib_1.__importDefault(require("./localization"));
var context_1 = tslib_1.__importDefault(require("./Provider/context"));
var Provider_1 = tslib_1.__importDefault(require("./Provider"));
exports.Provider = Provider_1.default;
var styles_1 = tslib_1.__importDefault(require("./styles"));
exports.styles = styles_1.default;
var localize = new localization_1.default();
exports.useLocalize = function () {
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
/*
  for react-native components to reverse directions
 */
exports.useTransformDirection = function (initialDir) {
    var isRtl = exports.useLocalize().isRtl;
    return react_1.useMemo(function () {
        var style = null;
        if (initialDir) {
            style = styles_1.default[initialDir];
        }
        if (isRtl) {
            style = styles_1.default.right;
        }
        return style;
    }, [initialDir, isRtl]);
};
/*
  for react-native input + text components
 */
exports.useTextDirection = function () {
    var isRtl = exports.useLocalize().isRtl;
    return react_1.useMemo(function () {
        return isRtl ? styles_1.default.rtlStyle : styles_1.default.ltrStyle;
    }, [isRtl]);
};
exports.initTranslations = localize.initTranslations.bind(localize);
//# sourceMappingURL=index.js.map