import type { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="min-w-0 flex flex-1 flex-col">
          <main className="flex-1">
            <div className="container mx-auto px-4 py-6">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}


