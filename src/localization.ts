import initLangs from "./init";
import { LangType, LangData, LocalProps } from "./index.interface";

class Localization {
  constructor() {
    this.activeLang = "";
    this.isRtl = false;
    this.langData = {};
    this.translations = "";
  }

  private translations: any;

  public activeLang: string;
  public isRtl?: boolean;
  public langData: LangData;

  updater = (langs: any, lName?: any) => {
    const requestUpdateLang = initLangs(langs, lName);
    const {
      activeLang,
      lang: { lang, isRtl }
    } = requestUpdateLang(lName);

    this.activeLang = activeLang;
    this.isRtl = isRtl;
    this.langData = lang;
  };

  initTranslations<
    T extends Record<string, LangType>,
    P extends keyof T | string
  >(translations: T, defaultLang: P): void {
    if (
      !translations ||
      (!Array.isArray(translations) && !Object.keys(translations).length)
    ) {
      throw "Translations Required for initialization";
    }
    this.translations = JSON.stringify(translations);
    this.updater(translations, defaultLang);
  }

  getLangData(langName: string): LocalProps {
    this.updater(JSON.parse(this.translations), langName || this.activeLang);
    return {
      currentTranslation: this.langData,
      activeLang: this.activeLang,
      isRtl: this.isRtl
    };
  }
}

export default Localization;
