// ScoreDisplay.tsx
import React from 'react';

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <div className="mt-6 p-4 border border-blue-500 rounded bg-blue-50 text-blue-700">
      <p>🎯 Ваши баллы: {score}</p>
    </div>
  );
};

export default ScoreDisplay;
