import { FC, useEffect, useState } from 'react';
import React from 'react';
import Loader from '../components/UI/Loader/Loader.jsx';
import { ICourse, IUser, RootState } from '../types/types.tsx';
import PostService from '../API/index.js';
import useFetching from '../hooks/useFetching.tsx';
import { useSelector } from 'react-redux';
import List from '../components/List.tsx';
import Card from '../components/Card.jsx';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/useSelector.tsx';
const CoursesPage: FC = () => {
  const courses = useAppSelector((state) => state.myCourses.courses);
  console.log(courses);
  // const [users, setUsers] = useState<IUser[]>([]);
  // const [fetchingUsers, loadingUsers, errorUsers] = useFetching(async () => {
  //   const users = await PostService.getUsers();
  //   setUsers(users.data);
  // });
  // useEffect(() => {
  //   fetchingUsers();
  // }, []);

  return (
    <>
      {/* {loadingUsers ? (
        <Loader />
      ) : ( */}
      <List
        items={courses}
        renderItem={(item: ICourse) => (
          <Card link={item.value} key={item.id} arr={item}></Card>
        )}
      ></List>
      {/* )} */}
    </>
  );
};

export default CoursesPage;
