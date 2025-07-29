import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: "500",
});

const interTightLight = Inter_Tight({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm space-y-4">
        <h1 className={`${interTight.className} text-2xl font-bold text-center p-4`}>Crie uma conta <span className={`${interTightLight.className} text-blue-900`}>grátis</span></h1>
        <div>
          <label className={`${interTight.className} block text-sm mb-1`} htmlFor="name">Nome completo</label>
          <input
            id="name"
            type="text"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${interTight.className}`}
            placeholder="Seu nome completo"
            required
          />
        </div>
        <div>
          <label className={`${interTight.className} block text-sm mb-1`} htmlFor="cpf">CPF</label>
          <input
            id="cpf"
            type="text"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${interTight.className}`}
            required
            maxLength={14}
            placeholder="000.000.000-00"
          />
        </div>
        <div>
          <label className={`${interTight.className} block text-sm mb-1`} htmlFor="phone">Celular</label>
          <input
            id="phone"
            type="tel"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${interTight.className}`}
            required
            placeholder="(99) 99999-9999"
          />
        </div>
        <div>
          <label className={`${interTight.className} block text-sm mb-1`} htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${interTight.className}`}
            placeholder="email@exemplo.com"
            required
          />
        </div>
        <div>
          <label className={`${interTight.className} block text-sm mb-1`} htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 ${interTight.className}`}
            placeholder="****"
            required
          />
        </div>
        <button
          type="submit"
          className={`${interTight.className} w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition`}
        >
          Registrar
        </button>
        <div className="text-center mt-2">
          <a href="/login" className={`${interTightLight.className} text-slate-400 text-sm hover:underline`}>Já tem conta? Entrar</a>
        </div>
      </form>
    </div>
  );
}