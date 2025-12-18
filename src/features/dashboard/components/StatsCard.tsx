import type { ReactNode } from 'react';
import { Card } from '../../../shared/components/ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: string;
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
          {trend && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {trend}
            </p>
          )}
        </div>
        {icon && (
          <div className="text-blue-600 dark:text-blue-400">{icon}</div>
        )}
      </div>
    </Card>
  );
}


