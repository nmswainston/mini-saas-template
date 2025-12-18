import { useState } from 'react';
import { getStripe } from './stripe';

const HAS_STRIPE = !!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

export function useStripe() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (priceId: string) => {
    setLoading(true);
    try {
      if (!HAS_STRIPE) {
        alert('Stripe is not configured. Set VITE_STRIPE_PUBLISHABLE_KEY in your .env file.');
        return;
      }

      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe failed to initialize (missing key or blocked by CSP).');
      }

      // In a real app, you would call your backend API to create a checkout session
      // For now, this is a placeholder that shows the structure
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();
      // Note: In production, you'll need to use Stripe Checkout Sessions API
      // This is a placeholder - replace with actual Stripe checkout implementation
      console.log('Checkout session ID:', sessionId);
      // For now, redirect to a success page
      window.location.href = '/pricing?success=true';
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. If you have a strict Content Security Policy, allow Stripe + Clerk domains (see CSP.md).');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleCheckout,
    loading,
  };
}


