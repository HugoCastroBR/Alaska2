import type { Metadata } from 'next';

import { SystemStoreProvider } from '../providers/system-store-provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Alaska OS 2',
  description: 'Web Operating System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SystemStoreProvider>
          {children}
        </SystemStoreProvider>
      </body>
    </html>
  );
}