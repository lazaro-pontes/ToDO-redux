import { ADD_TODO, TOGGLE_TODO } from "../actions/todos";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false,
          caption: "ativo",
          color: "new badge red"
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
            caption: todo.completed ? "ativo" : "concluído",
            color: todo.completed ? "new badge red" : "new badge green"
          });
        }
        return todo;
      });
    default:
      return state;
  }
}
