import React from 'react';
import {createRoot} from 'react-dom/client';
import {isElementType} from "@testing-library/user-event/dist/utils";

const TodoList = () => {
    const items = ['Learn React', 'Build Awesome App']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
}
const AppHeader = () => {
    return <h1>Hello World</h1>;
}
const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    }
    return <input style={searchStyle} placeholder={searchText}/>;

}
const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App/>);