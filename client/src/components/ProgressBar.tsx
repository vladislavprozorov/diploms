import React from 'react';
export const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
    <div
      className="bg-blue-600 h-4 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);
