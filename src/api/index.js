import { BASE_URL } from './../consts';

export const logIn = (userInfo) => {
  return fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userInfo)
  }).
  then( res => res.json() ).
  then( data => {
    if (!data.error) {
      return data;
    } else {
      throw data;
    }
  });
};

export const signIn = (userInfo) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userInfo)
  }).
  then( res => res.json() ).
  then( data => {
    if (!data.error) {
      return data.message;
    } else {
      throw data;
    }
  });
};