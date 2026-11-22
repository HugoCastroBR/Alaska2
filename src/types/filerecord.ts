interface FileRecord {
  id: string;
  name: string;
  parentId: string | null;
  mimeType: string;
  size: number;
  createdAt: number;
  updatedAt: number;
}