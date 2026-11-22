'use client';

import { useLiveQuery } from 'dexie-react-hooks';

import { db } from '@/services/database/database';

export function useFiles() {
  const files = useLiveQuery(
    () => db.files.toArray(),
    [],
    [],
  );

  return files;
}