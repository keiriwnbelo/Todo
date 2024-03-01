import React, { useState } from 'react';
import useStore from './store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useStore((state) => state.login);
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  const handleLogin = () => {
    const loggedIn = login(email, password);
    if (!loggedIn) {
      alert('Invalid username or password');
      console.log(isAuthenticated)
    }else{
        alert('nice');
        console.log(isAuthenticated)
  }};

  return (
<div style={{textAlign:'center'}}>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <form>
          <input
          style={{marginBottom:'10px'}}
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <input
          style={{marginBottom:'10px'}}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;