"use client";

import { useFiles } from "@/hooks/useFiles";
import { createFile } from "@/core/file-system/createFile";

export default function Home() {
  const files = useFiles();

  async function handleCreateFile() {
    try {
      await createFile(`Arquivo ${files.length + 1}`);
    } catch (error) {
      console.error("Erro ao criar arquivo:", error);
    }
  }

  async function handleRefreshFiles() {
    try {
      await Promise.resolve();
    } catch (error) {
      console.error("Erro ao atualizar arquivos:", error);
    }
  }

  return (
    <main>
      <h1>Alaska OS 2</h1>
      <div className="flex items-center gap-4">
        <button onClick={handleRefreshFiles}>REFRESH</button>
        <button onClick={handleCreateFile}>Criar arquivo</button>
      </div>

      {files.map((file) => (
        <p key={file.id}>{file.name}</p>
      ))}
    </main>
  );
}