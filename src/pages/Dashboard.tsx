import { useAuth } from '../hooks/useAuth';
import { StatsCard } from '../components/dashboard/StatsCard';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Package, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAIFeatures } from '../lib/ai-hooks';
import { useState, useEffect } from 'react';

export function Dashboard() {
  const { user } = useAuth();
  const { generateSuggestions } = useAIFeatures();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSuggestions = async () => {
      setLoading(true);
      try {
        const aiSuggestions = await generateSuggestions('dashboard');
        setSuggestions(aiSuggestions.map((s) => s.text));
      } catch (error) {
        console.error('Failed to load AI suggestions:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSuggestions();
  }, [generateSuggestions]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back{user?.firstName ? `, ${user.firstName}` : ''}!
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Here's what's happening with your account today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Items"
          value="12"
          icon={<Package size={24} />}
          trend="+2 from last month"
        />
        <StatsCard
          title="Active Users"
          value="1,234"
          icon={<Users size={24} />}
          trend="+12% from last month"
        />
        <StatsCard
          title="Growth Rate"
          value="24%"
          icon={<TrendingUp size={24} />}
          trend="+5% from last month"
        />
        <StatsCard
          title="AI Features"
          value="Ready"
          icon={<Sparkles size={24} />}
          trend="Available now"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link to="/items">
              <Button variant="primary" className="w-full justify-start">
                <Package size={20} className="mr-2" />
                Manage Items
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp size={20} className="mr-2" />
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            AI Suggestions
          </h2>
          {loading ? (
            <p className="text-gray-500 dark:text-gray-400">Loading suggestions...</p>
          ) : suggestions.length > 0 ? (
            <ul className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <Sparkles size={16} className="mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No suggestions available at the moment.
            </p>
          )}
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                New item created
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Account updated
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                1 day ago
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Welcome to SaaS Starter Kit!
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3 days ago
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

