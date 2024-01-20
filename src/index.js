import React from 'react';
import {createRoot} from 'react-dom/client';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {
    const todoData = [
        {label: 'Wordpress', important: false, id: 1},
        {label: 'Magento', important: true, id: 2},
        {label: 'React', important: false, id: 3}
    ]
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <ItemStatusFilter/>
            <TodoList todos={todoData}/>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App/>);