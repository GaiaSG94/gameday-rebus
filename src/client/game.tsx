import './index.css';

import { useCallback, useEffect, useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

type Init = {
  day: string;
  username: string;
  streak: number;
  solvedToday: boolean;
  startedAt: number;
  parts: string[];
  choices: string[];
};

type Result = { won: boolean; streak: number; elapsedMs: number; answer: string };

const App = () => {
  const [init, setInit] = useState<Init | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/init');
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setInit(data);
      setResult(null);
      setSeconds(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'load failed');
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const answer = async (choice: string) => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice, elapsedSeconds: seconds }),
      });
      const data = await res.json();
      if (data.status === 'error') throw new Error(data.message);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'submit failed');
    }
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fff4e6] text-[#4a3728]">
        <p>{error}</p>
      </div>
    );
  }
  if (!init) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fff4e6] text-[#b08b5e]">
        <p className="animate-pulse">Drawing today rebus…</p>
      </div>
    );
  }

  const clock = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 bg-[#fff4e6] px-4 py-6 text-[#4a3728]">
      <header className="flex w-full max-w-md items-center justify-between">
        <h1 className="text-xl font-black tracking-[0.3em] text-[#d97706]">REBUS</h1>
        <div className="text-sm font-semibold text-[#b08b5e]">
          <span className="mr-3">{clock}</span>
          <span>🔥 {result ? result.streak : init.streak}</span>
        </div>
      </header>
      <div className="flex w-full max-w-md items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-[#e6b877] bg-white/70 py-10 text-6xl">
        {init.parts.map((part, i) => (
          <span key={i}>{part}</span>
        ))}
      </div>
      <p className="max-w-md text-center text-[13px] leading-snug text-[#b08b5e]">
        Put the two pictures together into one English word.
      </p>
      <div className="grid w-full max-w-md grid-cols-2 gap-2">
        {init.choices.map((choice) => (
          <button
            key={choice}
            onClick={() => void answer(choice)}
            className="rounded-xl border-2 border-[#e6b877] bg-white px-3 py-3 text-sm font-bold capitalize text-[#4a3728] transition-transform active:scale-[0.98]"
          >
            {choice}
          </button>
        ))}
      </div>
      {result && (
        <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-xl border-2 border-[#e6b877] bg-white p-5 text-center">
          <p className="text-2xl font-black tracking-widest">
            {result.won ? 'SOLVED' : `IT WAS ${result.answer.toUpperCase()}`}
          </p>
          <p className="text-sm text-[#b08b5e]">
            {result.won
              ? `Solved in ${clock} — streak 🔥 ${result.streak}. A new rebus tomorrow.`
              : 'Two pictures, one word. A new rebus lands tomorrow.'}
          </p>
          <button
            onClick={() => setResult(null)}
            className="rounded-full border-2 border-[#d97706] px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#d97706]"
          >
            Another guess
          </button>
        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
