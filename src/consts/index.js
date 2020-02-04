import PageHome from './../pages/PageHome';
import PageServices from './../pages/PageServices';
import PageAbout from './../pages/PageAbout';
import PageAuth from './../pages/PageAuth';
import PageAdmin from './../pages/PageAdmin';

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://new.services' : 'http://new.services';
export const BASE_URL = `${ROOT_URL}/api`;
export const IMG_URL = `${ROOT_URL}/content/img`;