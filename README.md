## localize react/native apps

## How to install

```sh
yarn add react-instant-translate
npm i react-instant-translate
```

## 🔨 Usage

## in your app root

## first lang object key would be the default langName if you didn't set the initial one

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
  "ar" // default lang name
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

## For React-Native

```jsx
import React from "react";
import { Text } from "react-native";
import { useLocalize, useTextDirection } from "react-instant-translate/dist";

const MyNativeTextComponent = () => {
  const { currentTranslation } = useLocalize();
  const txtDirStyle = useTextDirection();
  return <Text style={txtDirStyle}>{currentTranslation.login}</Text>;
};

export default MyNativeTextComponent;
```

```jsx
import React from "react";
import { TextInput } from "react-native";
import { useLocalize, useTextDirection } from "react-instant-translate/dist";

const MyNativeTextInput = () => {
  const { currentTranslation } = useLocalize();
  const txtDirStyle = useTextDirection();
  return <TextInput style={txtDirStyle} />;
};

export default MyNativeTextInput;
```

```jsx
import React from "react";
import { View } from "react-native";
import {
  useLocalize,
  useTransformDirection
} from "react-instant-translate/dist";

const MyScreenContainer = () => {
  const { useTransformDirection } = useLocalize();
  const dirStyle = useTransformDirection();
  return <View style={dirStyle}>// what ever children</View>;
};

export default MyScreenContainer;
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

## useLocalize

| Name               |                       Type                        |
| :----------------- | :-----------------------------------------------: |
| currentTranslation |             active translation object             |
| activeLang         |                      string                       |
| isRtl              | if provides in initialization will retrun boolean |
| setLang            |               (newLangName) => void               |

```

```
