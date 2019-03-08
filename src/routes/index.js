import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*'
  }
];
