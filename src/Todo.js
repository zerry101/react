import React, { useState, useEffect } from 'react';

export function Todo() {


    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState(["fsfsfs","afdsfdsfsd"]);

    const hanldleNewtask = (event) => {
        setNewTask(event.target.value)
    }

    const pushValueToList=()=>{

        const newTodoList=[ ...todoList, newTask];
        setTodoList([...todoList,newTask]);
    }


    const deleteTask=(task)=>{
        console.log('====================================');
        console.log(todoList);
        console.log('====================================');
        const deletedList=todoList.splice(todoList.indexOf(task),1);
        console.log('====================================');
        console.log(deletedList);
        console.log('====================================');
    }

    return (
        <div>
            <input onChange={hanldleNewtask} />
            <button onClick={pushValueToList}>Add This task</button>

            {todoList.map((task, index) => {
                return <div><h1>{task}</h1><button onClick={(task)=>{deleteTask(task)}}></button></div>;
            })}
        </div>
    );


}