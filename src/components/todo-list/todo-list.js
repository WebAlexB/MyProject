import React, {Component} from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css"

export default class TodoList extends Component {
    render() {
        const {todos, onDeleted, doneItem, importantItem} = this.props;
        const elements = todos.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}
                                  onDeleted={() => onDeleted(id)}
                                  doneItem={() => doneItem(id)}
                                  importantItem={() => importantItem(id)}
                    />
                </li>
            );
        });
        return (
            <ul className="list-group todo-list">
                {elements}
            </ul>
        );
    }
}