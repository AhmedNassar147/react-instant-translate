"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.initialState = {
    langName: ""
};
exports.default = react_1.createContext({
    state: exports.initialState,
    // @ts-ignore
    setActiveLang: function (state) { return state; }
});
//# sourceMappingURL=context.js.map