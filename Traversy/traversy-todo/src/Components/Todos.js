import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    console.log(this.props.Todos)
    return this.props.Todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />    // "todo" has a prop of todo so we need to make a proptype for this too
    ));
  }
}

// Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired  // makes the prop of todos being an array required, array is required because todos is multiple items
}

export default Todos;
