import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "./actions/todos";

import {
  Row,
  Col,
  Collection,
  CollectionItem,
  Badge,
  TextInput,
  Button,
  Icon,
  Select
} from "react-materialize";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      newTodoText: "",
      filter: ""
    };
  }

  addNewTodo = () => {
    this.props.addToDo(this.state.newTodoText);
    this.setState({ newTodoText: "" });
  };

  toggle = event => {
    const index = parseInt(event.target.getAttribute("value"));
    this.props.toggleTodo(index);
  };

  visibilityFilter = (filtro) => {
    this.props.setVisibilityFilter(this.state.filter);
    switch(filtro){
      case "SHOW_ACTIVE": 
        return function active(todo, index) {
          return todo.completed === false
        }
      case "SHOW_COMPLETED":
        return function complete(todo, index) {
          return todo.completed
        }
      default: return function all(todo, index) {
        return true
      }
    }
    
  };

  handleSubmit = event => {
    return event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col m={12}>
            <Collection>
              {this.props.todos.filter(this.visibilityFilter(this.props.filtros)).map((todo, index) => (
                <CollectionItem key={todo.id}>
                  {todo.text} 
                  <Badge
                    key={todo.id}
                    value={todo.id}
                    className={todo.color}
                    caption={todo.caption}
                    onClick={this.toggle}
                  />
                </CollectionItem>
              ))}
            </Collection>
          </Col>
        </Row>

        <Row>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              s={12} m={9}
              label="adicione uma nova tarefa"
              data-length={50}
              value={this.state.newTodoText}
              onChange={e => this.setState({ newTodoText: e.target.value })}
            />

            <Select
              value={this.state.filter}
              onChange={e => this.setState({ filter: e.target.value })}
            >
              <option value="" disabled>
                escolha um filtro
              </option>
              <option value="SHOW_ALL">Mostrar todos</option>
              <option value="SHOW_COMPLETED">Mostrar os concluidos</option>
              <option value="SHOW_ACTIVE">Mostrar os ativos</option>
            </Select>

            <Button
              type="submit"
              className="blue lighten-1"
              waves="light"
              onClick={this.addNewTodo}
            >
              <Icon right>send</Icon>
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos,
  filtros: state.visibilityFilter
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
