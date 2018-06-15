import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
/**
 * TodoList is a list showing visible todos.
 *todos: Array is an array of todo items with { id, text, completed } shape.
 *onTodoClick(id: number) is a callback to invoke when a todo is clicked.
 */
class TodoList extends PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  render() {
    const {
      todos,
      onTodoClick
    } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    )
  }
}

export default TodoList;