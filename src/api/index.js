import { BASE_URL } from './../consts';

export const logIn = (userInfo) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userInfo)
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });

export const signIn = (userInfo) =>
  fetch(`${BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(userInfo)
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data.message;
  });

export const getServices = () => 
  fetch(`${BASE_URL}/services`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });

export const getServiceById = ({ id }) =>
  fetch(`${BASE_URL}/services/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });