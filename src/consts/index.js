export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://new.services/api' : 'http://new.services/api';

export const PAGES = [{path: '/',
                title: 'Home',
                exact: true,
                PageHome},
               {path: '/about',
                title: 'About Company',
                exact: false},
               {path: '/auth',
                title: 'Authorization',
                exact: false},
              ];