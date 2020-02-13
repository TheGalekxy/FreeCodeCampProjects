import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    

    render() {
        const { id, title } = this.props.todo;      // this pull out the ID, and Title from the todos. Allowing us to use just ID or TITLE below
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                    {' '}                       {/* Adds a space in between the checkbox and the todo item */}
                    {title} 
                </p>
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired           // to note: the proptype for "Todo" is now an object because it's a single item
  }


export default TodoItem
