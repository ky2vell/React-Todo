import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ThemeSwitch from './components/ThemeSwitch';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  state = {
    todos,
    theme: 'light'
  };

  toggleTheme = e => {
    const theme = e.target.checked ? 'dark' : 'light';
    this.setState({ theme });
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('Theme', theme);
  };

  addTodo = (e, todo) => {
    e.preventDefault();
    if (todo.length > 0) {
      const newTodo = {
        task: todo,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  componentDidMount() {
    const themeSwitch = document.getElementById('checkbox');
    localStorage.getItem('Theme') === 'dark'
      ? (themeSwitch.checked = true)
      : (themeSwitch.checked = false);

    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('Theme')
    );

    localStorage.getItem('Todos') &&
      this.setState({
        todos: JSON.parse(localStorage.getItem('Todos'))
      });
  }

  componentDidUpdate() {
    localStorage.setItem('Todos', JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div className='container'>
        <ThemeSwitch toggleTheme={this.toggleTheme} />
        <h1>Welcome to your Todo App!</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
