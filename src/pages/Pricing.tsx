import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useMockCheckout } from '../shared/billing/useMockCheckout';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'price_starter',
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      'Up to 100 items',
      'Basic support',
      'Email notifications',
      'Basic analytics',
    ],
    popular: false,
  },
  {
    id: 'price_pro',
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Unlimited items',
      'Priority support',
      'Email & SMS notifications',
      'Advanced analytics',
      'AI features included',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    id: 'price_enterprise',
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom AI training',
      'SLA guarantee',
      'On-premise deployment',
      'Custom contracts',
    ],
    popular: false,
  },
];

export function Pricing() {
  const { handleCheckout, loading } = useMockCheckout();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Pricing Plans
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Choose the plan that's right for you. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative ${
              plan.popular
                ? 'ring-2 ring-blue-600 dark:ring-blue-500 scale-105'
                : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {plan.description}
              </p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {plan.period}
                </span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <Check
                    size={20}
                    className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? 'primary' : 'outline'}
              className="w-full"
              onClick={() => handleCheckout(plan.id)}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Get Started'}
            </Button>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Need a custom plan?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Contact us for enterprise solutions and custom pricing.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </Card>
    </div>
  );
}

