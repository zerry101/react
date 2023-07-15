import React, { useState, useEffect } from 'react';

export function Todo() {


    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState(["fsfsfs", "afdsfdsfsd", "dgfdgfdgfdg"]);
    const hanldleNewtask = (event) => {
        setNewTask(event.target.value)
    }

    const [elementValue,setElementValue]=useState("")

    const pushValueToList = () => {

        const newTodoList = [...todoList, newTask];
        setTodoList([...todoList, newTask]);
    }


    const deleteTask = (taskIndex) => {
        todoList.splice(taskIndex, 1);
        setTodoList([...todoList]);
        // setTodoList(["df","dfd"]);
    }

    return (
        <div>
            <input onChange={hanldleNewtask} />
            <button onClick={pushValueToList}>Add This task</button>

            {todoList.map((task, index) => {
                return <div key={index}><h1>{task} {index} </h1>
                    <button onClick={() => {
                        deleteTask(index)
                    }}>
                        X
                    </button>
                    <button>
                        <input type='text'
                            onChange={(event) => {

                                //  todoList.splice(index,1,event.target.value);
                                todoList.splice(index, 1, event.target.value)
                                setTodoList([...todoList]);
                            }}
                        /> Update
                    </button>
                    <input 
                    onChange={(event)=>{
                        setElementValue(event.target.value)
                    }}
                    / >
                    <button  onClick={()=>{
                        todoList.splice(index,1,elementValue);
                        setTodoList([...todoList]);
                    }}>
                        Update By click
                    </button>
                </div>;
            })}
        </div>
    );


}