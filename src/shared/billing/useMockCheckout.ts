import { useState } from 'react';

/**
 * Portfolio-template mock billing hook.
 * Replaces the Stripe checkout flow with a lightweight, UI-friendly mock.
 */
export function useMockCheckout() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (planId: string) => {
    setLoading(true);
    try {
      // Simulate a network / checkout redirect delay
      await new Promise((resolve) => setTimeout(resolve, 600));

      // Persist "selected plan" so other parts of the app can display it if desired.
      localStorage.setItem('mock_selected_plan', planId);

      alert(`Mock checkout: selected plan "${planId}".`);
    } finally {
      setLoading(false);
    }
  };

  return { handleCheckout, loading };
}


