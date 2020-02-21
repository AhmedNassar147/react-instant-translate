import { useContext, useCallback } from "react";
import { LocalProps, UseLocalProps } from "./index.interface";
import langContext from "./Provider/context";
import Provider from "./Provider";
import Localization from "./localization";

const localize = new Localization();

const useLocalize = (): UseLocalProps => {
  const {
    state: { langName },
    setActiveLang
  } = useContext(langContext);

  const setLang = useCallback(
    (lngName: string) => {
      if (lngName) {
        setActiveLang({
          langName: lngName
        });
      }
    },
    [setActiveLang]
  );

  const langValues: LocalProps = localize.getLangData.bind(localize)(langName);

  return {
    setLang,
    ...langValues
  };
};

const initTranslations = localize.initTranslations.bind(localize);

export { Provider, initTranslations, useLocalize };
