import type { Item } from '../../../shared/types';
import { Input } from '../../../shared/components/ui/Input';
import { Textarea } from '../../../shared/components/ui/Textarea';
import { Select } from '../../../shared/components/ui/Select';
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
      <Textarea
        label="Description"
        name="description"
        defaultValue={item?.description ?? ''}
        required
        rows={4}
        placeholder="Enter item description"
      />
      <Select
        label="Status"
        name="status"
        defaultValue={item?.status ?? 'active'}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="pending">Pending</option>
      </Select>
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


