'use client';

import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddTransactionModal({ isOpen, onClose }: ModalProps) {
  // Estados para capturar os dados do formulário
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'income' | 'outcome'>('income');

  // Se o modal estiver fechado, não renderiza nada
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui criamos o objeto que seria enviado para o seu banco ou lista
    const newTransaction = {
      amount: Number(amount),
      description,
      type,
      category: 'Geral', // Categoria padrão por enquanto
      date: new Date().toISOString()
    };

    console.log('Nova transação:', newTransaction);
    
    // Limpa os campos e fecha o modal
    setAmount('');
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Overlay (Fundo escuro) */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />

      {/* Container do Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
        
        {/* Handle para Mobile (Barrinha cinza) */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden" />

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Novo Registro</h2>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input de Valor */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Valor</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">R$</span>
              <input 
                required
                type="number" 
                step="0.01"
                placeholder="0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-50 border-none rounded-2xl py-5 pl-12 pr-4 text-2xl font-bold text-indigo-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Input de Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Descrição</label>
            <input 
              required
              type="text" 
              placeholder="Ex: Supermercado, Salário..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-5 font-medium text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* Seletor de Tipo (Entrada ou Saída) */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              type="button" 
              onClick={() => setType('income')}
              className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold border-2 transition-all ${
                type === 'income' 
                ? 'bg-green-50 text-green-600 border-green-200 shadow-sm' 
                : 'bg-gray-50 text-gray-400 border-transparent opacity-60'
              }`}
            >
              <span className="text-xl">↓</span> Entrada
            </button>

            <button 
              type="button" 
              onClick={() => setType('outcome')}
              className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-bold border-2 transition-all ${
                type === 'outcome' 
                ? 'bg-red-50 text-red-600 border-red-200 shadow-sm' 
                : 'bg-gray-50 text-gray-400 border-transparent opacity-60'
              }`}
            >
              <span className="text-xl">↑</span> Saída
            </button>
          </div>

          {/* Botão Salvar */}
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all mt-4"
          >
            Confirmar Registro
          </button>
        </form>
      </div>
    </div>
  );
}