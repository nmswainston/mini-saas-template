export interface Item {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
}

export type Theme = 'light' | 'dark';

