/// <reference types="react" />
export default interface Props {
    children: React.ReactNode | React.ReactNode[];
    defaultLang?: string;
}
export interface LocalizeState {
    langName: string;
}
export declare type LocaizeStoreApi = {
    state: LocalizeState;
    setActiveLang: React.Dispatch<React.SetStateAction<LocalizeState>>;
};
//# sourceMappingURL=index.interface.d.ts.map