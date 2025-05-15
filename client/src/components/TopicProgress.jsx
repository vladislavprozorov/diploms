export const TopicProgress = ({ index, total, onNext, disabled }) => (
  <div className="flex items-center justify-between mt-10">
    <p className="text-gray-500">
      Тема {index + 1} из {total}
    </p>
    <button
      className={`mt-2 px-5 py-2 rounded-md text-white ${
        disabled ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700 transition'
      }`}
      onClick={onNext}
      disabled={disabled}
    >
      Далее
    </button>
  </div>
);
