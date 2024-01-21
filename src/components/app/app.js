import React, {Component} from "react";
import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import AddItem from "../add-item";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Wordpress'),
            this.createTodoItem('Magento'),
            this.createTodoItem('React')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deletedItem = (id) => {
        this.setState(({todoData}) => {
            const ids = todoData.findIndex((el => el.id === id));
            const newArray = [
                ...todoData.slice(0, ids),
                ...todoData.slice(ids + 1),
            ];
            return {
                todoData: newArray
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem,
            ];
            return {
                todoData: newArray
            }
        });
    }

    toggleProperty(arr, id, propName) {
        const ids = arr.findIndex((el => el.id === id));
        const oldItem = arr[ids],
            newItem = {
                ...oldItem,
                [propName]: !oldItem[propName]
            };
        return [
            ...arr.slice(0, ids),
            newItem,
            ...arr.slice(ids + 1),
        ];
    }

    doneItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    importantItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className='content'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={todoData}
                    onDeleted={this.deletedItem}
                    doneItem={this.doneItem}
                    importantItem={this.importantItem}
                />
                <AddItem addedItem={this.addItem}/>
            </div>
        );
    }
}
