import React, { Fragment, useState } from "react";

const InputTodo = props => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        try {
            e.preventDefault();
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            props.getTodos(); // Refresh todos
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <h1>Input Todo</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button value="submit">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
