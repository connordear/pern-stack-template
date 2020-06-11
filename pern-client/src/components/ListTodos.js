import React, { Fragment, useEffect, useState } from "react";

const ListTodos = props => {
    const todos = props.todos;
    const deleteTodo = async id => {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE",
        });
        console.log(response);
        props.getTodos();
    };
    useEffect(() => {
        props.getTodos();
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
