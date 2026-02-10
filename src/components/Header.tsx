export function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Finnive</h1>
        <p className="text-sm text-gray-500 font-medium">Bem-vindo, Henrique!</p>
      </div>
      <div className="w-12 h-12 rounded-2xl bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
        {/* Usando uma letra como placeholder, depois você pode colocar uma tag <Image /> */}
        <span className="text-indigo-600 font-bold">H</span>
      </div>
    </header>
  );
}