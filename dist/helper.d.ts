import { LangType } from "./index.interface";
/**
 * the Function exclude lang object from parsed langs
 */
export declare const excludeLang: (langs: string | Record<string, LangType>, langName: string) => {
    newLangs: Record<string, LangType>;
    exLang: LangType;
};
/**
 * langs are the whole translations in string
 * storedLang the current lnag object
 * activeLangName the current lang name
 */
export declare const switchLangs: (langs: string, storedLang: LangType, activeLangName: string) => {
    activeLang: LangType;
    storeLangs: string;
};
//# sourceMappingURL=helper.d.ts.map