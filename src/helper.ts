import { LangType } from "./index.interface";

/**
 * the Function exclude lang object from parsed langs
 */

export const excludeLang = (
  langs: string | Record<string, LangType>,
  langName: string
) => {
  let newLangs: Record<string, LangType>;
  let exLang: LangType;
  let langsJsObj;

  if (typeof langs === "string") {
    langsJsObj = JSON.parse(langs);
  } else {
    langsJsObj = langs;
  }

  if (langsJsObj.hasOwnProperty(langName)) {
    const { [langName]: excludedLang, ...otherLangs } = langsJsObj;
    newLangs = otherLangs;
    exLang = excludedLang;
  }

  return {
    // @ts-ignore
    newLangs,
    // @ts-ignore
    exLang
  };
};

/**
 * langs are the whole translations in string
 * storedLang the current lnag object
 * activeLangName the current lang name
 */

export const switchLangs = (
  langs: string,
  storedLang: LangType,
  activeLangName: string
) => {
  const { exLang, newLangs } = excludeLang(langs, activeLangName);

  return {
    activeLang: exLang,
    storeLangs: JSON.stringify({
      ...newLangs,
      ...storedLang
    })
  };
};
