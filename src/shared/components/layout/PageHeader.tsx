import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  actions,
  align = 'left',
  className = '',
}: PageHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`${
        isCentered
          ? 'space-y-4'
          : 'flex items-start justify-between gap-4'
      } ${className}`}
    >
      <div className={`${isCentered ? 'text-center' : 'min-w-0'}`}>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white break-words">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        ) : null}
      </div>

      {actions ? (
        <div className={`${isCentered ? 'flex justify-center' : 'shrink-0'}`}>
          {actions}
        </div>
      ) : null}
    </div>
  );
}


