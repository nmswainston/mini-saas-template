# SaaS Starter Kit

A complete, production-ready template for building micro SaaS products. This starter kit includes everything you need to get started quickly.

## Features

- ⚡ **React + Vite** - Fast development and build times
- 🎨 **Tailwind CSS v4** - Modern, utility-first styling with dark mode support
- 🔐 **Clerk Authentication** - Complete authentication solution
- 💳 **Stripe Integration** - Ready-to-use payment processing
- 📊 **Dashboard** - Beautiful dashboard with stats and activity
- 🔄 **CRUD Operations** - Full CRUD UI for managing items
- 🌓 **Dark/Light Mode** - Theme switching with persistence
- 🤖 **AI Integration Hooks** - Placeholder hooks for future AI features
- 📱 **Responsive Design** - Works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

### Setting up Clerk

1. Go to [Clerk](https://clerk.com) and create an account
2. Create a new application
3. Copy your Publishable Key from the dashboard
4. Add it to your `.env` file as `VITE_CLERK_PUBLISHABLE_KEY`

### Setting up Stripe

1. Go to [Stripe](https://stripe.com) and create an account
2. Navigate to Developers > API keys
3. Copy your Publishable key (test mode)
4. Add it to your `.env` file as `VITE_STRIPE_PUBLISHABLE_KEY`

**Note:** For production, you'll need to set up a backend API to create Stripe checkout sessions. The current implementation includes a placeholder for this.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components (Header, Sidebar, etc.)
│   ├── dashboard/       # Dashboard-specific components
│   └── crud/            # CRUD components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
│   ├── auth.ts          # Clerk setup
│   ├── stripe.ts        # Stripe configuration
│   └── ai-hooks.ts      # AI integration hooks
├── contexts/            # React contexts
└── types/               # TypeScript type definitions
```

## Key Features Explained

### Authentication

The app uses Clerk for authentication. Protected routes automatically redirect unauthenticated users to sign in.

### CRUD Operations

The Items page demonstrates a complete CRUD interface. Data is currently stored in localStorage, but you can easily replace this with API calls.

### AI Integration

The `lib/ai-hooks.ts` file contains placeholder functions for AI features. Replace these with your actual AI service integrations (OpenAI, Anthropic, etc.).

### Theme System

Dark/light mode is managed through a React context and persisted in localStorage. The theme toggle is available in the header.

### Stripe Checkout

The pricing page includes Stripe integration. You'll need to set up a backend API endpoint (`/api/create-checkout-session`) to create checkout sessions. See Stripe's documentation for details.

## Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Sidebar.tsx`

### Styling

The project uses Tailwind CSS v4. Customize colors and styles in `tailwind.config.js` and `src/index.css`.

### AI Features

To add AI features:

1. Update `src/lib/ai-hooks.ts` with your AI service integration
2. Use the hooks in your components
3. See `src/pages/Dashboard.tsx` for an example

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

The project is pre-configured for Netlify deployment with `netlify.toml`.

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and create a new site
3. Connect your GitHub repository
4. Netlify will automatically detect the `netlify.toml` configuration
5. Add environment variables in Netlify dashboard:
   - `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
   - `VITE_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
6. Click "Deploy site"

The `netlify.toml` file handles:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: All routes redirect to `index.html` for client-side routing

## License

MIT

## Support

This is a starter template. Customize it to fit your needs!
