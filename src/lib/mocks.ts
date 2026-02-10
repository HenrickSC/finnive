import { Transaction, DashboardStats } from '@/types/finance';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Salário Mensal',
    amount: 5000,
    type: 'income',
    category: 'Trabalho',
    date: '2024-05-01',
  },
  {
    id: '2',
    description: 'Aluguel',
    amount: 1500,
    type: 'expense',
    category: 'Moradia',
    date: '2024-05-05',
  },
  {
    id: '3',
    description: 'Supermercado',
    amount: 450.80,
    type: 'expense',
    category: 'Alimentação',
    date: '2024-05-10',
  },
  {
    id: '4',
    description: 'Assinatura Streaming',
    amount: 39.90,
    type: 'expense',
    category: 'Lazer',
    date: '2024-05-12',
  },
];

export const mockStats: DashboardStats = {
  totalBalance: 3009.30,
  totalIncomes: 5000,
  totalExpenses: 1990.70,
};