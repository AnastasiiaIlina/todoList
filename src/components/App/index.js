import React from 'react';

import AppHeader from '../AppHeader/';
import TodoList from '../TodoList/';
import SearchPanel from '../SearchPanel/';
import ItemStatusFilter from '../ItemStatusFilter/';
import './App.css';

const App = () => {
    const todoData = [
        {label: 'Drink coffee', important: false, id:1},
        {label: 'Make app', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3},

    ]
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ItemStatusFilter />
            <TodoList todos = { todoData }/>
        </div>
    )
};

export default App;
