import { FC } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { navItems } from '../../../config/navigation';
import React from 'react';
import { RouteNames } from '../../../config/routes';
import { useAppDispatch, useAppSelector } from '../../../hooks/useSelector';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/auth/auth';
import { useTheme } from '../../../theme/useTheme';
const Header: FC = () => {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);
  const dispatch = useAppDispatch();
  const { theme, toggleTheme } = useTheme();
  return isAuth ? (
    <header className="text-white text-[16px] bg-black ">
      <div className="flex justify-between py-5 sm:px-10 px-5 relative z-50 items-center container">
        <Link to="/" className="flex gap-2 hover:text-gray-300 transition-all">
          <span className="font-extrabold ">EngTech</span>
          <b className="max-[922px]:hidden">
            Технический английский для студентов
          </b>
        </Link>
        <nav className="header__nav">
          <ul className="header__list flex flex-1 gap-5 max-sm:hidden ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="header__item hover:text-gray-300 transition-all"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__login flex gap-2 hover:scale-110 transition-all">
          <div className="font-bold">Vladislav Prozorov</div>
          <Link onClick={() => dispatch(setAuth(false))} to="#">
            Выйти
          </Link>
          <FaCircleUser className="text-2xl" />
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="z-50 absolute left-[50%] border-r-8 border-4"
      >
        Change theme
      </button>
    </header>
  ) : (
    <header className="text-white text-[16px] bg-black ">
      <div className="flex justify-between py-5 sm:px-10 px-5 relative z-50 items-center container">
        <Link to="/" className="flex gap-2 hover:text-gray-300 transition-all">
          <span className="font-extrabold ">EngTech</span>
          <b className="max-[922px]:hidden">
            Технический английский для студентов
          </b>
        </Link>
        <nav className="header__nav">
          <ul className="header__list flex flex-1 gap-5 max-sm:hidden ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="header__item hover:text-gray-300 transition-all"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__login flex gap-2 hover:scale-110 transition-all">
          <Link onClick={() => console.log('Войти')} to="#">
            Войти
          </Link>
          <FaCircleUser className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
