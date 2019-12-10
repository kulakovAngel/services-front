export const logIn = ({login, password}) => {
  return fetch('http://new.services/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      login,
      password,
    })
  }).
  then((res) => {
    return res.json();
  }).
  then((data) => {
    if (!data.error) {
      return data;
    } else {
      throw data;
    }
  });
}