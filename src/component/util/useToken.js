import { useState } from 'react';

export default function UseToken() {

  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    console.log(userToken);
    console.log(userToken?.token);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  console.log("Save token in usetoken:"+saveToken);
  console.log("token in usetoken:"+token);

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    deleteToken: removeToken,
    token
  }
}
