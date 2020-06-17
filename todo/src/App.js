import React from "react";
import "materialize-css"
import { Provider } from "react-redux";

import TodoList from "./TodoList"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
		<div className="container">
			<div className="row"><h1 className="col xl6 m10 s12 offset-xl3 offset-m1 center-align"> lista pra fazer! </h1></div>
			<TodoList className="center-align"></TodoList>
		</div>
    </Provider>
  );
}

export default App;
