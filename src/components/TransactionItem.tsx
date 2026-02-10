import { Transaction } from '@/types/finance';

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const isIncome = transaction.type === 'income';

  return (
    <div className="bg-white p-5 rounded-[1.5rem] flex justify-between items-center shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        {/* Círculo do Ícone */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isIncome ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isIncome ? '↓' : '↑'}
        </div>
        
        {/* Textos: Descrição e Categoria */}
        <div>
          <p className="font-bold text-gray-800 text-sm">{transaction.description}</p>
          <p className="text-xs text-gray-400">{transaction.category}</p>
        </div>
      </div>

      {/* Valor com cor dinâmica */}
      <span className={`font-bold ${isIncome ? 'text-green-500' : 'text-gray-800'}`}>
        {isIncome ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
      </span>
    </div>
  );
}