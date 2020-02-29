import { UseLocalProps } from "./index.interface";
import Provider from "./Provider";
import styles from "./styles";
export declare const useLocalize: () => UseLocalProps;
export declare const useTransformDirection: (initialDir?: "left" | "right" | undefined) => {
    transform: {
        scaleX: number;
    }[];
} | null;
export declare const useTextDirection: () => {
    textAlign: string;
    writingDirection: string;
};
export declare const initTranslations: <T extends Record<string, import("./index.interface").LangType>, L extends keyof T>(translations: T, defaultLang?: L | undefined) => void;
export { Provider, styles };
//# sourceMappingURL=index.d.ts.map