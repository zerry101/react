import React, { useState, useEffect } from 'react';

export function Todo() {


    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState(["fsfsfs","afdsfdsfsd"]);

    const handleNewTask = (event) => {
        setNewTask(event.target.value)
    }

    const pushValueToList=()=>{

        const newTodoList=[ ...todoList, newTask];
        setTodoList([...todoList,newTask]);
    }
    return (
        <div>
            <input onChange={handleNewTask} />
            <button onClick={pushValueToList}>Add This task</button>

            {todoList.map((ele, index) => {
                return <h1>{ele}</h1>;
            })}
        </div>
    );


}