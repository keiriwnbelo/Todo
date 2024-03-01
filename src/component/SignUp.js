import React, { useState } from 'react';
import useStore from './store';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const addUser = useStore((state) => state.addUser);

  const handleSignup = () => {
    addUser({ email, password });
    setEmail('');
    setPassword('');
    alert("Success Signup")
  };

  return (
    <div style={{textAlign:'center'}}>
      <h1>Signup</h1>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;