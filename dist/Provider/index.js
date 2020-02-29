"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var context_1 = tslib_1.__importDefault(require("./context"));
var LocalizeProvider = function (_a) {
    var children = _a.children, defaultLang = _a.defaultLang;
    var _b = react_1.default.useState({
        langName: defaultLang || ""
    }), state = _b[0], setContext = _b[1];
    return (react_1.default.createElement(context_1.default.Provider, { value: {
            setActiveLang: setContext,
            state: state
        } }, children));
};
exports.default = LocalizeProvider;
//# sourceMappingURL=index.js.map