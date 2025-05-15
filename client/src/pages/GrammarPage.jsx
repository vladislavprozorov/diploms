import React from 'react';

const grammarList = [
  {
    id: 0,
    title: 'Начальный',
    value: 'beginner',
    description: ' 25 уроков',
  },
  {
    id: 1,
    title: 'Средний',
    value: 'medium',
    description: '22 урока',
  },
  {
    id: 2,
    title: 'Продвинутый',
    value: 'advanced',
    description: '9 уроков',
  },
];
const GrammarPage = () => {
  return (
    <>
      {/* <div className="container">
        <div className="grammar__body py-16">
          <h2 className="grammar_header text-4xl font-bold mb-2">
            Начните изучение грамматики !
          </h2>
          <p className="text-2xl">Выберите комплекс уроков под ваш уровень</p>
        </div>
      </div> */}
    </>
  );
};

export default GrammarPage;
