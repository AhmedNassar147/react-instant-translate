import { LangData, LangType, LocalProps } from "./index.interface";

class Localize {
  private translations: string = "";
  public activeLang: string = "";
  public isRtl?: boolean = false;
  public langData: LangData = {};

  private initLang(trans: Record<string, LangType>, lngname?: string): void {
    if (!lngname || !Object.keys(trans).includes(lngname)) {
      lngname = Object.keys(trans)[0];
    }

    this.activeLang = lngname;

    const langData: LangType = trans[lngname];

    this.isRtl = langData.isRtl;
    this.langData = langData.lang;
  }

  initTranslations<T extends Record<string, LangType>, L extends keyof T>(
    translations: T,
    defaultLang?: L
  ): void {
    if (
      !translations ||
      (!Array.isArray(translations) && !Object.keys(translations).length)
    ) {
      console.error("Translations Not Found");
    } else {
      this.translations = JSON.stringify(translations);
      this.initLang(translations, defaultLang as string);
    }
  }

  getLangData(langName: string): LocalProps {
    if (this.translations) {
      const langData: LangType = JSON.parse(this.translations)[
        langName || this.activeLang
      ];

      this.isRtl = langData.isRtl;
      this.langData = langData.lang;
      this.activeLang = langName;
    }

    return {
      currentTranslation: this.langData,
      activeLang: this.activeLang || langName,
      isRtl: this.isRtl
    };
  }
}

export default Localize;
