import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../App";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #1f3c88;
  padding: 20px 40px;
  border-radius: 4px;
  border: 1px solid #5893d4;
  color: #fff;
  font-size: 20px;
  margin: 20px auto;
  display: block;
`;

class TodoForm extends React.Component {
  todoInput = React.createRef();

  onKeyDown = e => {
    if (e.key === "Enter") {
      this.props.addTodo(this.todoInput.current.value);
      this.todoInput.current.value = "";
    }
  };

  render() {
    return (
      <StyledInput
        onKeyDown={this.onKeyDown}
        ref={this.todoInput}
        placeholder="Whats next?"
        type="text"
      />
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
