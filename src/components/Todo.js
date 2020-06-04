import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <li
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.task}
    </li>
  );
};

export default Todo;
