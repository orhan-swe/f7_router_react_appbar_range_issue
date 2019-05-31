import HomePage from 'scenes/HomePage';
import SearchPage from 'scenes/SearchPage';


// these three routes are used in F7AppViewLoader to load default route
export let routeHome = "/home";
export let routeSearch = "/search";


export default [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchPage,
  },
];
