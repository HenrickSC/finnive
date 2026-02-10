import { mockTransactions, mockStats } from '@/lib/mocks';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans pb-24">
      {/* Header com Saudação */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900 tracking-tight">Finnive</h1>
          <p className="text-gray-500 text-sm">Olá, Henrique!</p>
        </div>
        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 font-bold border-2 border-white shadow-sm">
          H
        </div>
      </header>

      {/* Card de Saldo Total (Destaque) */}
      <section className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200 mb-10 relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1 opacity-80">Saldo disponível</p>
          <h2 className="text-4xl font-extrabold tracking-tight">
            R$ {mockStats.totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h2>
        </div>
        {/* Enfeite visual no card */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
      </section>

      {/* Seção de Transações */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Atividade recente</h3>
          <button className="text-indigo-600 text-sm font-semibold">Ver tudo</button>
        </div>
        
        <div className="space-y-4">
          {mockTransactions.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-[1.5rem] flex justify-between items-center shadow-sm border border-gray-100">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {item.type === 'income' ? '↓' : '↑'}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{item.description}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
              <span className={`font-bold ${item.type === 'income' ? 'text-green-500' : 'text-gray-800'}`}>
                {item.type === 'income' ? '+' : '-'} R$ {item.amount.toFixed(2)}
              </span>
            </div>
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