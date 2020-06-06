import React from 'react';
import './Todo.css';
import PropTypes from 'prop-types';

const Todo = props => {
  return (
    <li
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {props.todo.completed && <i className='fas fa-check'></i>}
      {props.todo.task}
    </li>
  );
};

// PropTypes
Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
};

export default Todo;
