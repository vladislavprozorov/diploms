import Button from './UI/button/Button.jsx';

const Main = () => {
  return (
    <main className="w-full h-screen  relative flex flex-col justify-center items-center">
      <img
        className="absolute top-[-64px] main-bg nav-height  w-full inset-0"
        src={`/assets/images/learning.webp`}
        alt=""
      />
      <div className="main__body relative   z-50 text-center">
        <h1 className="text-white text-2xl mb-2">
          Начните изучать технический английский прямо сейчас!
        </h1>
        <Button>Начать изучение</Button>
      </div>
    </main>
  );
};

export default Main;
