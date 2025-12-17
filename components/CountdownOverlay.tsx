import React, { useEffect, useState, useRef } from 'react';

interface Props {
  startCount: number;
  onComplete: () => void;
  onRevealClick: () => void;
  state: 'counting' | 'waiting_reveal';
  playSound: (type: 'tick' | 'complete') => void;
}

export const CountdownOverlay: React.FC<Props> = ({ startCount, onComplete, onRevealClick, state, playSound }) => {
  const [count, setCount] = useState(startCount);
  // Use a ref to track if we've already played the sound for the current count to avoid duplicates in StrictMode
  const lastPlayedCountRef = useRef<number | null>(null);

  useEffect(() => {
    if (state !== 'counting') return;

    // Play tick sound when count changes
    if (count > 0 && lastPlayedCountRef.current !== count) {
      playSound('tick');
      lastPlayedCountRef.current = count;
    }

    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [count, state, onComplete, playSound]);

  if (state === 'counting') {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl mb-4 font-light">배정 결과를 계산 중입니다...</h2>
        <div className="text-9xl font-bold animate-bounce tabular-nums">
          {count > 0 ? count : "완료!"}
        </div>
      </div>
    );
  }

  if (state === 'waiting_reveal') {
    return (
      <div 
        className="fixed inset-0 bg-blue-900 z-50 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-blue-800 transition-colors"
        onClick={onRevealClick}
      >
        <div className="text-center animate-pulse">
            <h1 className="text-6xl font-bold mb-8">배정 완료!</h1>
            <p className="text-2xl border-2 border-white rounded-full px-8 py-4 inline-block hover:bg-white hover:text-blue-900 transition-all">
                화면을 클릭하여 결과를 확인하세요
            </p>
        </div>
      </div>
    );
  }

  return null;
};