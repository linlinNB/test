/**
 * 导入不同的页面：
 *  1.homeView： 展示列表主页
 *  2.addUser：添加用户界面
 *  3.updateUser：修改用户信息
 */
import HomeView from '../view/Container/Home/home';
import AddUserView from '../view/Container/AddUser/addUser.js';
import UpdateUserView from '../view/Container/UpdateUser/updateUser';

export default [
    {
        exact: true,
        name: 'home',
        path: '/',
        component: HomeView,
    },
    {
        exact: true,
        name: 'addUser',
        path: '/addUser',
        component: AddUserView,
    },
    {
        exact: true,
        name: 'updateUser',
        path: '/updateUser/:id',
        component: UpdateUserView,
    }
]
