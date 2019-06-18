import React from "react";

export default class Todo extends React.Component {
    render() {

        return (
            <div key={this.props.id}>
                {this.props.todo}
            </div>
            // <div key={this.props.key}>
            //    {this.props.todo}
            // </div>
        );
    }
}