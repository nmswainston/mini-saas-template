import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { Button } from '../../../shared/components/ui/Button';
import { Card } from '../../../shared/components/ui/Card';
import { Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../../shared/components/layout/Footer';

const HAS_CLERK = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SaaS Starter Kit
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A complete template for building your next micro SaaS product
            </p>
            {HAS_CLERK ? (
              <>
                <SignedOut>
                  <div className="flex gap-4 justify-center">
                    <Link to="/sign-in">
                      <Button variant="primary" size="lg">Get Started</Button>
                    </Link>
                    <Link to="/pricing">
                      <Button variant="outline" size="lg">View Pricing</Button>
                    </Link>
                  </div>
                </SignedOut>
                <SignedIn>
                  <Link to="/dashboard">
                    <Button variant="primary" size="lg">Go to Dashboard</Button>
                  </Link>
                </SignedIn>
              </>
            ) : (
              <div className="flex gap-4 justify-center">
                <Link to="/pricing">
                  <Button variant="primary" size="lg">View Pricing</Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg">Preview Dashboard</Button>
                </Link>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  AI Ready
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built-in hooks and placeholders for AI features. Easy to integrate with any AI service.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fast Setup
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get up and running in minutes with pre-configured authentication, payments, and UI components.
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Secure
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with security best practices. Includes authentication, protected routes, and more.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


