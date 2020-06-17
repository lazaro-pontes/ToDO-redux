import React from "react";
import "materialize-css"
import { Provider } from "react-redux";

import TodoList from "./TodoList"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
		<div className="container">
			<div className="row"><h1 className="col xl6 m10 offset-xl3 offset-m2"> lista pra fazer! </h1></div>
			<TodoList></TodoList>
		</div>
    </Provider>
  );
}

export default App;
