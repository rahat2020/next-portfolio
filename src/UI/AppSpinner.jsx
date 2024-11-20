'use client';

import { useState, useEffect } from 'react';

const AppSpinner = ({ message = 'Loading' }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-64 h-64 relative">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-blue-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-white stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (progress / 100) * 251.2}
            transform="rotate(-90 50 50)"
          ></circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          {progress}%
        </div>
      </div>
      <div className="mt-8 text-white text-2xl font-light">{message}</div>
    </div>
  );
};

export default AppSpinner;
