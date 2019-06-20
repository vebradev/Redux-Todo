import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import uuid from "uuid";
import Container from "./components/Container";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    );
  }
}

// 1. State { todoList }

// 2. Action types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// 3. Reducer
function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO: // Stretch task!
      return state;
    case TOGGLE_COMPLETE:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
    default:
      return state;
  }
}

// 4. Combine reducers
const combinedReducer = combineReducers({
  todos: todoReducer
});

// 5. Redux store
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 6. Provider
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);

// 7. Action dispatchers
export function addTodo(value) {
  return {
    type: ADD_TODO,
    payload: {
      value,
      id: uuid(),
      completed: false
    }
  };
}

export function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
}
