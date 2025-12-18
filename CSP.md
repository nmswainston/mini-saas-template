## CSP troubleshooting (Clerk + Stripe)

If you see errors like:

- "Missing Clerk Publishable Key..." (console warning)
- "Connecting to '<url>' violates the following Content Security Policy directive: connect-src ..."
- Stripe errors referencing `m.stripe.network`

### 1) Verify where the CSP is coming from

In Chrome/Edge DevTools:

- Open **Network**
- Click the **Document** request (your page HTML)
- Check **Response Headers** for `Content-Security-Policy`

If the CSP is present there, it’s being set by whatever is serving the HTML (hosting platform, reverse proxy, web server, etc.). This Vite template does **not** define a CSP by default.

### 2) Allow the required domains

At minimum, your CSP needs `connect-src` to allow Clerk + Stripe network calls.

Common allowlist to start with (adjust to your setup):

```
connect-src 'self'
  https://*.clerk.com
  https://*.clerk.accounts.dev
  https://*.clerk.dev
  https://api.clerk.com
  https://stripe.com
  https://*.stripe.com
  https://api.stripe.com
  https://m.stripe.network
  https://r.stripe.com;
```

Notes:

- Clerk may also require additional subdomains depending on your instance and environment.
- If you load Stripe.js, you may also need `script-src` to allow `https://js.stripe.com` and `frame-src` to allow `https://checkout.stripe.com`.
- If you **cannot** change CSP in local dev and Stripe noise is distracting, this template disables Stripe "advanced fraud signals" in dev (see `src/shared/billing/stripe.ts`). That avoids loading the `m.stripe.network` iframe in most cases.


