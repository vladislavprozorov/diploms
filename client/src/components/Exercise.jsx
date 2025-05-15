import { useState } from 'react';

export const Exercise = ({ instruction, expectedAnswer }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    setResult(input.trim().toLowerCase() === expectedAnswer.toLowerCase());
  };

  return (
    <div className="mt-6">
      <p className="font-medium text-lg mb-3 text-gray-800">{instruction}</p>
      <input
        className="border border-gray-300 p-3 rounded-md w-full max-w-xl mb-3 text-gray-800"
        type="text"
        placeholder="Введите свой вариант..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        onClick={checkAnswer}
      >
        Проверить
      </button>
      {result !== null && (
        <p
          className={`mt-3 font-medium ${
            result ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {result ? '✅ Верно!' : '❌ Неверно. Попробуйте ещё раз.'}
        </p>
      )}
    </div>
  );
};
