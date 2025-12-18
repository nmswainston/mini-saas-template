import type { Item } from '../../../shared/types';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/Button';

interface ItemFormProps {
  item?: Item | null;
  onSubmit: (item: Omit<Item, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

export function ItemForm({ item, onSubmit, onCancel }: ItemFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const description = String(formData.get('description') ?? '').trim();
    const status = (formData.get('status') as Item['status'] | null) ?? 'active';

    onSubmit({ name, description, status });
  };

  return (
    <form key={item?.id ?? 'new'} onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        name="name"
        defaultValue={item?.name ?? ''}
        required
        placeholder="Enter item name"
      />
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Description
        </label>
        <textarea
          name="description"
          defaultValue={item?.description ?? ''}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
          placeholder="Enter item description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
          Status
        </label>
        <select
          name="status"
          defaultValue={item?.status ?? 'active'}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg transition-colors bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {item ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}


