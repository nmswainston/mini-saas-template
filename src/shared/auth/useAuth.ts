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

  // HAS_CLERK is derived from a build-time env var and does not change at runtime.
  // This conditional hook usage is safe (the branch is static per build), but ESLint can't infer that.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isLoaded: userLoaded } = useUser();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { signOut } = useClerkAuth();

  return {
    user,
    isAuthenticated: !!user,
    isLoading: !userLoaded,
    signOut,
  };
}


