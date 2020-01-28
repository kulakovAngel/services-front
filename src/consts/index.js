import PageHome from './../pages/PageHome';
import PageServices from './../pages/PageServices';
import PageAbout from './../pages/PageAbout';
import PageAuth from './../pages/PageAuth';
import PageAdmin from './../pages/PageAdmin';

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://new.services' : 'http://new.services';
export const BASE_URL = `${ROOT_URL}/api`;
export const IMG_URL = `${ROOT_URL}/content/img`;

export const PAGES = [
  {path: '/',
   title: 'Home',
   exact: true,
   component: PageHome},
  {path: '/services',
   title: 'Our Services',
   exact: true,
   component: PageServices},
  {path: '/about',
   title: 'About Company',
   exact: false,
   component: PageAbout},
  {path: '/auth',
   title: 'Authorization',
   exact: false,
   component: PageAuth},
  {path: '/admin',
   title: 'Admin Page',
   exact: false,
   component: PageAdmin},
];