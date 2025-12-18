import { useUser, useAuth as useClerkAuth } from '@clerk/clerk-react';

const HAS_CLERK = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function useAuth() {
  // If Clerk isn't configured, return mock auth state for development
  if (!HAS_CLERK) {
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      signOut: async () => {},
    };
  }

  const { user, isLoaded: userLoaded } = useUser();
  const { signOut } = useClerkAuth();

  return {
    user,
    isAuthenticated: !!user,
    isLoading: !userLoaded,
    signOut,
  };
}

