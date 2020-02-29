export type LangData = Record<string, any>;

export type LangType = {
  isRtl?: boolean;
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

export type dir = "right" | "left";
