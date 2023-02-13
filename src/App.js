import React, { useState, useEffect } from "react";
import todo from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "To-Do-App";

// const list = [
//     { title: "Test # 1", completed: false },
//     { title: "Test # 2" },
//     { title: "Test # 3 "}
// ];

const App = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const {data} = await todos.get("/todos");
            setTodoList(data);
        }
        fetchData();
    }, []);

    const addTodo = async(item) => {
        const {data} = await todos.post("/todos", item);
        setTodoList((oldlist) => [...oldlist, item]);
    }

    const removeTodo = async(id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id ));
    }

    const editTodo = async(id, item) => {
        await todos.put(`/todos/${íd}`, item);
    }

    return (
        <div className="ui container center aligned">
            <Section>
                <h1>
                    {appTitle}
                </h1>
            </Section>

            <Section>
                <Form addTodo={addTodo}/>
            </Section>

            <Section>
                <List
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo}
                    list={todoList}
                />
            </Section>

        </div>
    )
}

export default App