import React from 'react';
import SignUp from './component/SignUp';
import Login from './component/Login';
import MyTodo from './component/MyTodo';
import useStore from './component/store';


const App = () => {

  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const logout = useStore((state) => state.logout);
  
  const handleLogout = () => {
    logout();
    console.log('clear')
  };
  


  return (
    <div>
      
      {!isAuthenticated ? (
        <><h1>Login </h1><Login/><SignUp/></>
      ) : (
        <div>
        <MyTodo />
        <div style={{textAlign:'center', marginTop: '30px'}}>
        <button  onClick={handleLogout}>Logout</button>
      </div>
      </div>
      )}

    
    </div>
  );
};


export default App;

