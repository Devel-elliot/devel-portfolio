import { useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [stage, setStage] = useState('play');
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    setStage('loading');
    const duration = 5000; // 5 seconds
    const interval = 50;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      setProgress(current);
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setStage('done');
          onComplete();
        }, 500);
      }
    }, interval);
  };

  if (stage === 'done') return null;

  return (
    <div className={`loading-screen ${stage === 'loading' ? 'active' : ''}`}>
      {stage === 'play' && (
        <button className="play-btn" onClick={handlePlay} aria-label="Start Experience">
          <svg viewBox="0 0 24 24" fill="currentColor" width="80" height="80">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      )}

      {stage === 'loading' && (
        <div className="loading-letters-only">
          {['D', 'E', 'V', "'", 'E', 'L'].map((letter, index) => (
            <span
              key={index}
              className={`letter ${progress > (index + 1) * 15 ? 'visible' : ''}`}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}