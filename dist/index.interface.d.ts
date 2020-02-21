export declare type LangData = Record<string, any>;
export declare type LangType = {
    isRtl?: boolean;
    lang: LangData;
};
export declare type UpdatedLocalLangType = {
    activeLang: string;
    lang: LangData;
};
export interface LocalProps {
    currentTranslation: LangData;
    activeLang: string;
    isRtl?: boolean;
}
export interface UseLocalProps extends LocalProps {
    setLang: (lngName: string) => void;
}
//# sourceMappingURL=index.interface.d.ts.map