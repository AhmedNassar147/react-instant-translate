import React from "react";
import Store from "./context";
import Props, { LocalizeState } from "./index.interface";

const LocalizeProvider: React.FC<Props> = ({
  children,
  defaultLang
}): JSX.Element => {
  const [state, setContext] = React.useState<LocalizeState>({
    langName: defaultLang || ""
  });

  return (
    <Store.Provider
      value={{
        setActiveLang: setContext,
        state
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default LocalizeProvider;
