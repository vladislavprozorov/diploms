import React from 'react';
import { navItems } from '../config/navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="top__footer flex justify-between container py-10">
        <a href="#" className="flex gap-2">
          <span className="font-extrabold ">EngTech</span>
          <b className="max-[922px]:hidden">
            Технический английский для студентов
          </b>
        </a>
        <ul className="header__list flex gap-5 ">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="header__item hover:text-gray-300 transition-all"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom__footer"></div>
    </footer>
  );
};

export default Footer;
