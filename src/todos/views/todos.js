import React from 'react';
import AddTodo from './addTodos.js';
import TodoList from './todoList.js';

import './style.css';


export default () => {
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    )
}