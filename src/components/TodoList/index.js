import React from "react";
import TodoListItem from '../TodoListItem/';
import './TodoList.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li className='list-group-item' key= { item.id }><TodoListItem { ...item } /></li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            { elements }
        </ul>
    );
};

export default TodoList;
