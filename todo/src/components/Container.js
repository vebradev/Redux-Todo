import React from "react";
import { connect } from "react-redux";
// 8. Import action dispatchers
import { addTodo } from "../App";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export class Container extends React.Component {
  render() {

    return (
      <div>
        <TodoForm />
        <Todo todoList={this.props.todoList} />
      </div>
    );
  }
}

// 9. Map state to props
function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}

// 10. Connect component (props as 1st arg, action dispatchers as 2nd arg)
export default connect(
  mapStateToProps,
  { addTodo }
)(Container);
