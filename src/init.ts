import { switchLangs, excludeLang } from "./helper";
import { LangType, UpdatedLocalLangType } from "./index.interface";

const initLocalization = function<
  T extends Record<string, LangType>,
  P extends keyof T
>(translations: T, defaultLang?: P) {
  let deflang: string = defaultLang
    ? defaultLang.toString()
    : Object.keys(translations)[0];

  const { exLang, newLangs } = excludeLang(translations, deflang);
  let langs = JSON.stringify(newLangs);
  let activeLang: string = deflang;
  let lang: LangType = exLang;

  return function<L extends keyof T>(langName?: L): UpdatedLocalLangType {
    let lngName = langName ? langName.toString() : deflang;
    if (langName && langName !== activeLang) {
      const { activeLang: activeLangObj, storeLangs } = switchLangs(
        langs,
        lang,
        lngName
      );
      lang = activeLangObj;
      langs = storeLangs;
      activeLang = lngName;
    }
    return {
      lang,
      activeLang
    };
  };
};

export default initLocalization;
