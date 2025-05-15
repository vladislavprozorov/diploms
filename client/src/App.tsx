import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';
import './styles/index.scss';
import { React } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const { theme } = useTheme();
  const myDelay = (delay, returnValue) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(returnValue);
      }, delay);
    });
  };
  console.log(myDelay(1000, { name: 'vlad' }).then((res) => console.log(res)));

  document.cookie = 'username=Владос';
  document.cookie = 'age=21';
  console.log('Cookie', document.cookie);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
