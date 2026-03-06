import React, { useEffect, useRef, useState } from 'react';

interface Props {
  startCount: number;
  onComplete: () => void;
  onRevealClick: () => void;
  state: 'counting' | 'waiting_reveal';
  playSound: (type: 'tick' | 'complete') => void;
}

export const CountdownOverlay: React.FC<Props> = ({
  startCount,
  onComplete,
  onRevealClick,
  state,
  playSound,
}) => {
  const [count, setCount] = useState(startCount);
  const lastPlayedCountRef = useRef<number | null>(null);

  useEffect(() => {
    if (state !== 'counting') return;

    if (count > 0 && lastPlayedCountRef.current !== count) {
      playSound('tick');
      lastPlayedCountRef.current = count;
    }

    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }

    onComplete();
  }, [count, state, onComplete, playSound]);

  if (state === 'counting') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 text-white">
        <h2 className="mb-4 text-2xl font-light">배정 결과를 계산 중입니다...</h2>
        <div className="animate-bounce text-9xl font-bold tabular-nums">
          {count > 0 ? count : '완료!'}
        </div>
      </div>
    );
  }

  if (state === 'waiting_reveal') {
    return (
      <div
        className="fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-blue-900 text-white transition-colors hover:bg-blue-800"
        onClick={onRevealClick}
      >
        <div className="animate-pulse text-center">
          <h1 className="mb-8 text-6xl font-bold">배정 완료!</h1>
          <p className="inline-block rounded-full border-2 border-white px-8 py-4 text-2xl transition-all hover:bg-white hover:text-blue-900">
            화면을 클릭하여 결과를 확인하세요.
          </p>
        </div>
      </div>
    );
  }

  return null;
};
