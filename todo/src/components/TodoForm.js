import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../App";

class TodoForm extends React.Component {
    todoInput = React.createRef();

    onKeyDown = e => {
        if (e.key === "Enter") {
            this.props.addTodo(this.todoInput.current.value);
            this.todoInput.current.value = "";
        }
    }
    
    render () {
        return (
            <input
                onKeyDown={this.onKeyDown}
                ref={this.todoInput}
                placeholder="Whats next?"
                type="text"
            />
        );
    }
}

export default connect(null, { addTodo })(TodoForm);