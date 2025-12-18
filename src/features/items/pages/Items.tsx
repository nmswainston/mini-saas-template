import { useState } from 'react';
import type { Item } from '../../../shared/types';
import { ItemList } from '../components/ItemList';
import { ItemForm } from '../components/ItemForm';
import { Modal } from '../../../shared/components/ui/Modal';
import { Button } from '../../../shared/components/ui/Button';
import { Plus, Trash2 } from 'lucide-react';
import { PageHeader } from '../../../shared/components/layout/PageHeader';

export function Items() {
  const [items, setItems] = useState<Item[]>(() => {
    const saved = localStorage.getItem('items');
    return saved ? JSON.parse(saved) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const saveItems = (newItems: Item[]) => {
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleCreate = () => {
    setEditingItem(null);
    setIsFormOpen(true);
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleSubmit = (itemData: Omit<Item, 'id' | 'createdAt'>) => {
    if (editingItem) {
      const updated = items.map((item) =>
        item.id === editingItem.id
          ? { ...item, ...itemData }
          : item
      );
      saveItems(updated);
    } else {
      const newItem: Item = {
        ...itemData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      saveItems([...items, newItem]);
    }
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      saveItems(items.filter((item) => item.id !== itemToDelete));
      setIsDeleteModalOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Items"
        subtitle="Manage your items with full CRUD operations."
        actions={
          <Button variant="primary" onClick={handleCreate}>
            <Plus size={20} />
            Create Item
          </Button>
        }
      />

      <ItemList
        items={items}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      <Modal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingItem(null);
        }}
        title={editingItem ? 'Edit Item' : 'Create Item'}
      >
        <ItemForm
          item={editingItem}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingItem(null);
          }}
        />
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setItemToDelete(null);
        }}
        title="Delete Item"
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleteModalOpen(false);
                setItemToDelete(null);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              className="flex items-center gap-2"
            >
              <Trash2 size={16} />
              Delete
            </Button>
          </>
        }
      >
        <p className="text-gray-700 dark:text-gray-300">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
      </Modal>
    </div>
  );
}


