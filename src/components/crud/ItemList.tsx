import type { Item } from '../../types';
import { Button } from '../ui/Button';
import { Trash2, Edit } from 'lucide-react';

interface ItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

export function ItemList({ items, onEdit, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No items found. Create your first item to get started.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : item.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}
                >
                  {item.status}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex gap-2 ml-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(item)}
                className="flex items-center gap-1"
              >
                <Edit size={16} />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(item.id)}
                className="flex items-center gap-1"
              >
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

