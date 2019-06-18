import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleComplete } from "../App";

export class Todo extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(item => (
          <li key={item.id} onClick={() => this.props.toggleComplete(item.id)}>
            {item.value}
          </li>
        ))}
      </ul>
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
