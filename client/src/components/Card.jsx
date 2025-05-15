import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ arr, link }) => {
  return (
    <div className="courses__columns border-2 hover:shadow-2xl hover:cursor-pointer">
      <Link to={link} className="courses__item p-10 block">
        <div className="courses__content ">
          <h3 className="text-xl font-bold mb-2">{arr.title}</h3>
          <p className="text-gray-500">{arr.description}</p>
          <p className="text-gray-500">{arr.level}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
