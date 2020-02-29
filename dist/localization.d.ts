import { LangData, LangType, LocalProps } from "./index.interface";
declare class Localize {
    private translations;
    activeLang: string;
    isRtl?: boolean;
    langData: LangData;
    private initLang;
    initTranslations<T extends Record<string, LangType>, L extends keyof T>(translations: T, defaultLang?: L): void;
    getLangData(langName: string): LocalProps;
}
export default Localize;
//# sourceMappingURL=localization.d.ts.map