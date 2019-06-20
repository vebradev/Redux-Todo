import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleComplete } from "../App";
import styled from "styled-components";

const StyledUl = styled.ul`
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  margin: 20px auto;
  display: block;
  width: fit-content;
  padding: 0;
  list-style-type: none;

  li {
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #1f64b1;
        color: #fff;
    }
  }

  .strike-false {
    background-color: #5893d4;
  }

  .strike-true {
    color: #1ab700;
      background-color: #b0e0a8;
  }
`;

export class Todo extends React.Component {
  render() {
    return (
      <StyledUl>
        {this.props.todos.map(item => (
          <li
            key={item.id}
            onClick={() => this.props.toggleComplete(item.id)}
            className={`strike-${item.completed}`}
          >
            {item.value}
          </li>
        ))}
      </StyledUl>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleComplete
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
