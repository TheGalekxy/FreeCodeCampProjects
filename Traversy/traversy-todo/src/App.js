import React, { Component } from 'react';
import Todos from './Components/Todos'
import './App.css';


class App extends Component {
  state = {
    Todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Family',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
 
  markComplete = (id) => {
    this.setState({ Todos: this.state.Todos.map(todo => {
      if(todo.id === id) {    // checks to see if the current todo.id is the same as the id that has been passed into the function.
        todo.completed = !todo.completed  // if it is, return the opposite of the current completed value (eg. if it's false, return true and vice-versa)
      }
      return todo;
    }) });  // Changing the state, match the ID that has been inputed and changes the "completed" value
  }

render(){
    return (
      <div className="App">
        <Todos Todos={this.state.Todos} markComplete={this.markComplete}/>             {/* This is how you add the file info into the app */}
      </div>
    );
  }
}


export default App;
