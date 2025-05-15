import React from 'react';
import MyInput from './UI/input/MyInput';
import Button from './UI/button/Button';
import { useAppDispatch, useAppSelector } from '../hooks/useSelector';
import { setAuth } from '../store/auth/auth';

const Login = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="container p-40  h-full flex flex-col items-center justify-center">
      <div class="form__group field">
        <MyInput
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">
          Логин
        </label>
      </div>
      <div class="form__group field">
        <MyInput
          type="input"
          class="form__field"
          placeholder="password"
          name="password"
          id="password"
          required
        />
        <label for="password" class="form__label">
          Пароль
        </label>
      </div>
      <Button className="" onClick={() => dispatch(setAuth(true))}>
        Войти
      </Button>
    </div>
  );
};

export default Login;
