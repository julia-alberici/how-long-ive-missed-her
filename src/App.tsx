import { useEffect, useState } from 'react';
import CatIllustration from './components/CatIllustration';
import CounterGrid from './components/CounterGrid';
import { calculateElapsed, START_DATE, type ElapsedTime } from './utils/date';

export default function App() {
  const [elapsed, setElapsed] = useState<ElapsedTime>(() =>
    calculateElapsed(START_DATE)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(calculateElapsed(START_DATE));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-bg flex flex-col items-center justify-center pb-8 px-4 overflow-y-hidden sm:flex-row sm:items-center sm:justify-center sm:px-0 sm:pb-0 lg:px-4 lg:mt-0 lg:flex-col xl:gap-2 xl:pb-12">
      <CatIllustration />
      <CounterGrid elapsed={elapsed} />
    </div>
  );
}
