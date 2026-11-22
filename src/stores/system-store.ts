import { createStore } from 'zustand/vanilla';

export interface SystemState {
  isBooting: boolean;
  isStartMenuOpen: boolean;
  activeAppId: string | null;
}

export interface SystemActions {
  finishBoot: () => void;
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
  setActiveApp: (appId: string | null) => void;
}

export type SystemStore = SystemState & SystemActions;

const initialState: SystemState = {
  isBooting: true,
  isStartMenuOpen: false,
  activeAppId: null,
};

export const createSystemStore = (
  state: SystemState = initialState,
) => {
  return createStore<SystemStore>()((set) => ({
    ...state,

    finishBoot: () => set({ isBooting: false }),

    toggleStartMenu: () =>
      set((state) => ({
        isStartMenuOpen: !state.isStartMenuOpen,
      })),

    closeStartMenu: () => set({ isStartMenuOpen: false }),

    setActiveApp: (appId) => set({ activeAppId: appId }),
  }));
};

export type SystemStoreApi = ReturnType<typeof createSystemStore>;