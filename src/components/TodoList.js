import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <>
      <ul>
        {props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
        ))}
      </ul>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </>
  );
};

export default TodoList;
