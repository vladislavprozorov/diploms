import React from 'react';
import { privateRoutes, publicRoutes } from '../config/routes';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useAppSelector } from '../hooks/useSelector';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);
  return isAuth ? (
    <Suspense fallback={<Loader />}>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
