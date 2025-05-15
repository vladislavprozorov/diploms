import React from 'react';
import { Link, useParams } from 'react-router-dom';
const beginner = [
  {
    id: 0,
    title:
      'Личные местоимения английского языка. Употребление глагола to be: как, где и зачем',
  },
  {
    id: 1,
    title:
      'Множественное число существительных английского языка. Неопределенный артикль в английском языке',
  },
  {
    id: 2,
    title: 'Притяжательные местоимения в английском языке',
  },
  {
    id: 3,
    title: 'Притяжательный падеж в английском языке',
  },
  {
    id: 4,
    title: 'Указательные местоимения в английском языке',
  },
  {
    id: 5,
    title: 'Present Simple – простое настоящее время в английском языке',
  },
  {
    id: 6,
    title: 'Типы вопросов в английском языке',
  },
  {
    id: 7,
    title: 'Прилагательные в английском языке',
  },
  {
    id: 8,
    title: 'Предлоги времени в английском языке: at, in, on',
  },
];
const BegginerGrammar = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="common-padding flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-5">Начальный уровень грамматики</h2>
      <ul className="flex flex-col gap-10 ">
        {beginner.map((item) => (
          <li
            className="flex gap-2  text-xl hover:text-orange-500"
            key={item.id}
          >
            <span className="font-light  text-[#e0e0e0] text-[3.5rem] mr-[55px]">
              {item.id + 1}.<span className="border-r-2 border-solid"></span>
            </span>

            <Link className="text-xl ">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BegginerGrammar;
