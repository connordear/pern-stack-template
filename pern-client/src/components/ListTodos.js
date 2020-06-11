import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };
    const deleteTodo = async id => {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE",
        });
        console.log(response);
        getTodos();
    };
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            <div className={"row"}>
                <h2>Description</h2>
                <h2>Delete</h2>
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.todo_id} className={"row"}>
                        <h3>{todo.description}</h3>
                        <button onClick={() => deleteTodo(todo.todo_id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </Fragment>
    );
};

export default ListTodos;
