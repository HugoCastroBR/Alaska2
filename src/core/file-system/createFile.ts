import { db } from '@/services/database/database';

export async function createFile(name: string) {
  await db.files.add({
    id: crypto.randomUUID(),
    name,
    parentId: null,
    createdAt: Date.now(),
  });
}