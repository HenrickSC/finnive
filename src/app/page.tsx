import { mockTransactions, mockStats } from '@/lib/mocks';
import { BalanceCard } from '@/components/BalanceCard';
import { TransactionItem } from '@/components/TransactionItem';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans pb-24">
      {/* Header com Saudação */}
      <Header />

      {/* Card de Saldo Total (Destaque) */}
      <BalanceCard stats={mockStats} />

      {/* Seção de Transações */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Atividade recente</h3>
          <button className="text-indigo-600 text-sm font-semibold">Ver tudo</button>
        </div>
        
        <div className="space-y-4">
          {mockTransactions.map((item) => (
            <TransactionItem key={item.id} transaction={item} />
          ))}
        </div>
      </section>

      {/* Botão Flutuante para Novo Gasto */}
      <button className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-indigo-200 font-bold flex items-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all">
        <span className="text-xl">+</span> Novo Registro
      </button>
    </main>
  );
}