import { DashboardStats } from '@/types/finance';

interface BalanceCardProps {
  stats: DashboardStats;
}

export function BalanceCard({ stats }: BalanceCardProps) {
  return (
    <section className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-200 mb-10 relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1 opacity-80">
          Saldo disponível
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight">
          R$ {stats.totalBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </h2>
      </div>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
    </section>
  );
}