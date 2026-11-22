import { Dexie, type EntityTable } from 'dexie';

export interface FileRecord {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: number;
}

class AlaskaDatabase extends Dexie {
  files!: EntityTable<FileRecord, 'id'>;

  constructor() {
    super('AlaskaDatabase');

    this.version(1).stores({
      files: 'id, name, parentId',
    });
  }
}

export const db = new AlaskaDatabase();