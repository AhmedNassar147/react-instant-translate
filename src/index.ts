import { useContext, useCallback, useMemo } from "react";
import { LocalProps, UseLocalProps, dir } from "./index.interface";
import Localization from "./localization";
import langContext from "./Provider/context";
import Provider from "./Provider";
import styles from "./styles";

const localize = new Localization();

export const useLocalize = (): UseLocalProps => {
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

/*
  for react-native components to reverse directions
 */

export const useTransformDirection = (initialDir?: dir) => {
  const { isRtl } = useLocalize();

  return useMemo(() => {
    let style = null;

    if (initialDir) {
      style = styles[initialDir];
    }

    if (isRtl) {
      style = styles.right;
    }

    return style;
  }, [initialDir, isRtl]);
};

/*
  for react-native input + text components
 */

export const useTextDirection = () => {
  const { isRtl } = useLocalize();

  return useMemo(() => {
    return isRtl ? styles.rtlStyle : styles.ltrStyle;
  }, [isRtl]);
};

export const initTranslations = localize.initTranslations.bind(localize);

export { Provider, styles };
