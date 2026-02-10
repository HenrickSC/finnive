export type Transaction = {
  id: string;
  description: string;
  amount: number; 
  type: 'income' | 'expense'; // 'income' para entrada, 'expense' para saída
  category: string;
  date: string;
};

export type DashboardStats = {
  totalBalance: number;
  totalIncomes: number;
  totalExpenses: number;
};