import { LangType, UpdatedLocalLangType } from "./index.interface";
declare const initLocalization: <T extends Record<string, LangType>, P extends keyof T>(translations: T, defaultLang?: P | undefined) => <L extends keyof T>(langName?: L | undefined) => UpdatedLocalLangType;
export default initLocalization;
//# sourceMappingURL=init.d.ts.map