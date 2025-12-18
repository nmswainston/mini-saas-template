import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    if (!STRIPE_PUBLISHABLE_KEY) {
      console.warn('Missing Stripe Publishable Key. Please set VITE_STRIPE_PUBLISHABLE_KEY in your .env file');
      stripePromise = Promise.resolve(null);
    } else {
      // Stripe's "advanced fraud signals" can trigger additional network/iframe traffic (e.g. m.stripe.network).
      // In local dev, teams often run with strict CSP or privacy tooling that blocks these requests.
      // Disabling it in dev reduces console noise and avoids false failures; keep enabled for production.
      // Note: Stripe's TS types don't currently expose this option, but Stripe may still honor it at runtime.
      const opts = import.meta.env.DEV ? ({ advancedFraudSignals: false } as any) : undefined;
      stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY, opts);
    }
  }
  return stripePromise;
};

