import React,  { useState } from 'react';
import './login.css';
import PropTypes from 'prop-types';

function tokenValue(){
    return "tokenValue";
}

export default function Login(props) {
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = e => {  
    console.log(props.setToken(tokenValue()));
  }

  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }