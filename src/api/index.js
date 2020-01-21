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
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });

export const getServiceById = ({ id }) =>
  fetch(`${BASE_URL}/services/${id}`, {
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });

export const getOrders = () => 
  fetch(`${BASE_URL}/orders`, {
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });

export const postOrder = (data) =>
  fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(data),
  })
    .then( res => res.json() )
    .then( data => {
      if (data.error) throw data;
      return data;
  });