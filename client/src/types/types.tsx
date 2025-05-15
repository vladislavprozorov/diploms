import { ElementType } from 'react';
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface NavItem {
  id: number;
  value: string;
  title: string;
  path: string;
  icon?: React.ReactNode;
}
export interface IRoute {
  path: string;
  element: React.ComponentType;
}
export interface ICourse {
  id: number;
  title: string;
  description: string;
  level: string;
  value?: string;
  courses?: [];
}
export interface RootState {
  courses: ICourse[];
}
