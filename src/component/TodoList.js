
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useStore from './component/store';

function TodoApp() {
  const { accounts, addAccount, addTodo, removeTodo } = useStore();

  const handleAddAccount = () => {
    const accountId = uuidv4();
    addAccount(accountId);
  };

  const handleAddTodo = (accountId, text) => {
    const todo = { id: uuidv4(), text };
    addTodo(accountId, todo);
  };

  const handleRemoveTodo = (accountId, todoId) => {
    removeTodo(accountId, todoId);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAddAccount}>Add Account</button>
      {Object.entries(accounts).map(([accountId, todos]) => (
        <div key={accountId}>
          <h2>Account {accountId}</h2>
          <input
            type="text"
            placeholder="Enter todo..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                handleAddTodo(accountId, e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.text}{' '}
                <button onClick={() => handleRemoveTodo(accountId, todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoApp;