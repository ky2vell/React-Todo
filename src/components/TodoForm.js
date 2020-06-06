import React, { Component } from 'react';

export class TodoForm extends Component {
  state = {
    todo: ''
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    const input = document.getElementById('submit');
    e.preventDefault();
    if (input.value.length !== 0) {
      this.setState({ todo: '' });
      this.props.addTodo(e, this.state.todo);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitTodo} autoComplete='off'>
        <input
          id='submit'
          type='text'
          value={this.state.todo}
          name='todo'
          placeholder='Enter Your Todo!'
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
