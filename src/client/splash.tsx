import './index.css';

import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-[#fff4e6] px-6 text-center text-[#4a3728]">
      <div className="text-3xl">🧩</div>
      <h1 className="text-3xl font-black tracking-[0.3em] text-[#d97706]">REBUS</h1>
      <p className="max-w-[240px] text-[13px] leading-snug text-[#b08b5e]">
        Two pictures, one word, every day. Hi {context.username ?? 'puzzler'}.
      </p>
      <button
        onClick={(e) => requestExpandedMode(e.nativeEvent, 'game')}
        className="mt-2 rounded-full bg-[#d97706] px-8 py-2.5 text-sm font-black uppercase tracking-widest text-white transition-transform active:scale-[0.98]"
      >
        Guess
      </button>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
