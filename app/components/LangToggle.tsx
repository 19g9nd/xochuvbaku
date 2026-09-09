import { Lang } from "../types";

interface LangToggleProps {
  lang: Lang;
  onToggle: () => void;
}

export function LangToggle({ lang, onToggle }: LangToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 rounded-full border border-white/40 bg-white/30 backdrop-blur-xl px-4 py-1.5 text-sm font-medium tracking-wide text-[#1c2a38] hover:bg-white/50 transition-all shadow-lg"
    >
      {lang === "ru" ? "EN" : "RU"}
    </button>
  );
}