import { ClerkProvider } from '@clerk/clerk-react';
import type { ReactNode } from 'react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '';

if (!PUBLISHABLE_KEY) {
  console.warn('Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env file');
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // If no key is provided, render children without Clerk (for development/preview)
  if (!PUBLISHABLE_KEY) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}

