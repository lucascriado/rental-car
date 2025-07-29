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

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm space-y-4">
        <h1 className={`${interTight.className} text-2xl font-bold text-center p-4`}>
          Bem-vindo <span className={`${interTightLight.className} text-blue-900`}>de volta!</span>
        </h1>

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
          Entrar
        </button>

        <div className="text-center mt-2">
          <a href="/register" className={`${interTightLight.className} text-slate-400 text-sm hover:underline`}>
            Ainda não tem conta? Criar agora
          </a>
        </div>
      </form>
    </div>
  );
}
