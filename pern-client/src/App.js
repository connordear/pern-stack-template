import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./components/master.css";

const App = () => {
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
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            <InputTodo getTodos={getTodos} />
            <ListTodos todos={todos} getTodos={getTodos} />
        </Fragment>
    );
};

export default App;
