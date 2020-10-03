import React, { useState } from 'react';
//Internal other components
import {Counter} from './Counter';
import Form from './Form';
import TodoList from './TodoList';
import UserList from './UserList';
//import logo from './logo.svg';
//import './App.css';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [label,setLabel] = useState('Login');

  return (
    <>
    <UserList />
    <h1>Hello World!</h1>
    {isLoggedIn ? 
      <>
      <Form />
      <TodoList />
      </> :
      ''
    }
    <button onClick={() => {
      setIsLoggedIn(!isLoggedIn);
      if(label==='Login') setLabel('Logout');
      else setLabel('Login');
    }}>{label}</button>
    </>
  );
}

export default App;
