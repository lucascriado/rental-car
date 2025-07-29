import { Inter_Tight } from "next/font/google";
// import icons from lucide-icons/react;
import { Car } from "lucide-react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: "500",
});

const interTightLight = Inter_Tight({
  subsets: ["latin"],
  weight: "600",
  style: "normal",
});

const interTightItalic = Inter_Tight({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="absolute top-4 right-4 gap-4 flex">
        <a href="/login" className={`${interTightLight.className} text-sm text-slate-500`}>
          login
        </a>
        <a href="/register" className={`${interTightLight.className} text-sm text-slate-500`}>
          register
        </a>
      </div>        
      <div className="flex items-center justify-center mb-4">
        <Car className="w-12 h-12 text-blue-900" />
      </div>
      <p className={`${interTightItalic.className} text-lg italic`}>Your next car is just one click away.</p>
      <h1 className={`${interTight.className} text-2xl text-center`}>Choose, book, and drive – all online, no hassle.</h1>

      <div className="mt-8 text-center mx-auto space-y-4">
        <p className={`${interTight.className} text-lg`}>
          <span className="font-bold text-black">1.</span> No paperwork, no lines. 100% digital experience.
        </p>
        <p className={`${interTight.className} text-lg`}>
          <span className="font-bold text-black">2.</span> Affordable prices with no hidden fees.
        </p>
        <p className={`${interTight.className} text-lg`}>
          <span className="font-bold text-black">3.</span> Modern fleet with full insurance and maintenance.
        </p>
        <p className={`${interTight.className} text-lg`}>
          <span className="font-bold text-black">4.</span> 24/7 support for complete peace of mind.
        </p>
      </div>

    </div>
  );
}
