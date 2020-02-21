## localize react/native apps

## How to install

```sh
yarn add react-instant-translate
npm i react-instant-translate
```

## 🔨 Usage

## in your app root

```jsx
import { Provider, initTranslations } from "react-instant-translate/dist";

import firstLang from "your path to/whateverLang.json";
import secondLang from "your path to/whateverLang.json";
import thirdLang from "your path to/whateverLang.json";

initTranslations(
  {
    ar: {
      lang: firstLang,
      isRtl: true
    },
    en: {
      lang: secondLang,
      isRtl: false
    },
    fa: {
      lang: thirdLang,
      isRtl: true
    }
  },
  "ar"
);

ReactDOM.render(
  // wrap your arr with Provider Component
  <Provider defaultLang="ar">
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## in any file your wanna use current lang

```jsx
import React from "react";
import { useLocalize } from "react-instant-translate/dist";

const MyTextComponent = () => {
  const { currentTranslation } = useLocalize();
  return <p>{currentTranslation.login}</p>;
};

export default MyTextComponent;
```

## Provider Props

| Name        |         Type         | Required |
| :---------- | :------------------: | :------: |
| children    |     JSX of Array     |   Node   | true |
| defaultLang | `string | undefined` |  false   |

## initTranslations Props

| Name        |                                      Type                                      | Required |
| :---------- | :----------------------------------------------------------------------------: | :------: |
| langs       | object of { langName:{ lang: jsonLang (Required), isRtl: boolean undefined } } |   true   |
| defaultLang |                 `string | undefined` (one of your langs keys)                  |  false   |
