import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map(item => (
          <li key={item.todo.id}>{item.todo}</li>
        ))}
      </ul>
    );
  }
}
