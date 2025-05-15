import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import List from '../components/List.tsx';
import Card from '../components/Card.jsx';
import { useAppSelector } from '../hooks/useSelector.tsx';
var CoursesPage = function () {
    var courses = useAppSelector(function (state) { return state.myCourses.courses; });
    console.log(courses);
    // const [users, setUsers] = useState<IUser[]>([]);
    // const [fetchingUsers, loadingUsers, errorUsers] = useFetching(async () => {
    //   const users = await PostService.getUsers();
    //   setUsers(users.data);
    // });
    // useEffect(() => {
    //   fetchingUsers();
    // }, []);
    return (_jsx(_Fragment, { children: _jsx(List, { items: courses, renderItem: function (item) { return (_jsx(Card, { link: item.value, arr: item }, item.id)); } }) }));
};
export default CoursesPage;
