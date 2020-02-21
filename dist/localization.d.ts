import { LangType, LangData, LocalProps } from "./index.interface";
declare class Localization {
    constructor();
    private translations;
    activeLang: string;
    isRtl?: boolean;
    langData: LangData;
    updater: (langs: any, lName?: any) => void;
    initTranslations<T extends Record<string, LangType>, P extends keyof T | string>(translations: T, defaultLang: P): void;
    getLangData(langName: string): LocalProps;
}
export default Localization;
//# sourceMappingURL=localization.d.ts.map