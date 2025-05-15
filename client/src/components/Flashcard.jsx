import React from 'react';

const Flashcard = ({ word, example }) => {
  return (
    <div className="border p-5 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-all">
      <p className="text-sm text-indigo-500 font-medium uppercase tracking-wide">
        Термин
      </p>
      <h4 className="text-xl font-semibold text-gray-800 mt-1">{word}</h4>
      <p className="text-gray-600 mt-2 text-sm italic">Пример: {example}</p>
    </div>
  );
};

export default Flashcard;
