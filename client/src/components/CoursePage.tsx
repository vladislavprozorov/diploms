import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ICourse } from '../types/types';
import { useAppSelector } from '../hooks/useSelector';
import { Exercise } from './Exercise';
import Flashcard from './Flashcard';
import { TopicProgress } from './TopicProgress';
import { ProgressBar } from './ProgressBar';
import { VideoLesson } from './VideoLesson';
import ScoreDisplay from './ScoreDisplay';

const CoursePage: FC = ({}) => {
  const [currentTopic, setCurrentTopic] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const params = useParams<{ id: string }>();
  const courses = useAppSelector((state) => state.myCourses.courses);
  const myArr = courses.find((item: ICourse) => item.value === params.id);
  const topic = myArr.topics[currentTopic];
  const total = myArr.topics.length;
  const handleExerciseCompletion = (correct: boolean) => {
    if (correct) {
      setScore((prevScore) => prevScore + 10);
    }
  };
  const progress = ((currentTopic + 1) / total) * 100;
  return (
    <div className="p-6  mx-auto font-sans text-gray-800 container">
      <h1 className="text-4xl font-bold mb-2 text-blue-700">{myArr.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{myArr.description}</p>

      <ProgressBar progress={progress} />

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-3 text-blue-600">
          📘 {topic.title}
        </h2>

        <ul className="list-disc pl-6 mb-4 text-gray-700">
          {topic.content.map((item, idx) => (
            <li key={idx} className="mb-1">
              {item}
            </li>
          ))}
        </ul>

        <VideoLesson
          title="Видео по теме"
          videoUrl="https://www.example.com/video.mp4"
        />

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            🧠 Флешкарты (Термины + Примеры)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topic.interactive.flashcards.map((card, idx) => (
              <Flashcard key={idx} {...card} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            📌 Примеры из реальных текстов
          </h3>
          <ul className="list-disc pl-6">
            {topic.interactive.examples.map((ex, idx) => (
              <li key={idx} className="italic text-gray-600 mb-1">
                {ex}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">
            ✍️ Практика: Переформулируй правильно
          </h3>
          {topic.interactive.exercises.map((ex, idx) => (
            <Exercise
              key={idx}
              {...ex}
              handleCompletion={handleExerciseCompletion}
            />
          ))}
        </div>

        <TopicProgress
          index={currentTopic}
          total={total}
          onNext={() => {
            if (currentTopic + 1 < total) setCurrentTopic((prev) => prev + 1);
            else setCompleted(true);
          }}
          disabled={false}
        />

        {completed && (
          <div className="mt-6 p-4 border border-green-500 rounded bg-green-50 text-green-700">
            🎉 Вы завершили курс! Отличная работа!
          </div>
        )}

        <ScoreDisplay score={score} />
      </div>
    </div>
  );
};

export default CoursePage;
