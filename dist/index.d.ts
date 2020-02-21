import { UseLocalProps } from "./index.interface";
import Provider from "./Provider";
declare const useLocalize: () => UseLocalProps;
declare const initTranslations: <T extends Record<string, import("./index.interface").LangType>, P extends string | keyof T>(translations: T, defaultLang: P) => void;
export { Provider, initTranslations, useLocalize };
//# sourceMappingURL=index.d.ts.map