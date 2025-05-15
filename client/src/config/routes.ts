import About from '../components/About';
import BegginerGrammar from '../components/BeginnerGrammar/BeginnerGrammar';
import CoursePage from '../components/CoursePage';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import CoursesPage from '../pages/CoursesPage';
import GrammarPage from '../pages/GrammarPage';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { IRoute } from '../types/types';
export enum RouteNames {
  LOGIN = '/login',
  OTHERPAGES = '*',
}
export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.OTHERPAGES, element: Login },
];
export const privateRoutes: IRoute[] = [
  { path: '/', element: HomePageAsync },
  { path: '/grammar', element: GrammarPage },
  { path: '/grammar/:beginner', element: BegginerGrammar },
  { path: '/courses', element: CoursesPage },
  { path: '/courses/:id', element: CoursePage },
  { path: '/about', element: About },
  { path: '*', element: NotFound },
];
