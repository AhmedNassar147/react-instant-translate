export default interface Props {
  children: React.ReactNode | React.ReactNode[];
  defaultLang?: string;
}

export interface LocalizeState {
  langName: string;
}

export type LocaizeStoreApi = {
  state: LocalizeState;
  setActiveLang: React.Dispatch<React.SetStateAction<LocalizeState>>;
};
