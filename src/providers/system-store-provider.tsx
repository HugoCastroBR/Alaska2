'use client';

import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from 'react';

import { useStore } from 'zustand';

import {
  createSystemStore,
  type SystemStore,
  type SystemStoreApi,
} from '../stores/system-store';

const SystemStoreContext = createContext<SystemStoreApi | null>(null);

interface SystemStoreProviderProps {
  children: ReactNode;
}

export function SystemStoreProvider({
  children,
}: SystemStoreProviderProps) {
  const storeRef = useRef<SystemStoreApi | null>(null);

  if (!storeRef.current) {
    storeRef.current = createSystemStore();
  }

  return (
    <SystemStoreContext.Provider value={storeRef.current}>
      {children}
    </SystemStoreContext.Provider>
  );
}

export function useSystemStore<T>(
  selector: (store: SystemStore) => T,
): T {
  const store = useContext(SystemStoreContext);

  if (!store) {
    throw new Error(
      'useSystemStore must be used within SystemStoreProvider',
    );
  }

  return useStore(store, selector);
}