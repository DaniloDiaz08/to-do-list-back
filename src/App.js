import React, { useState } from "react";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "To-Do-App";

const list = [
    { title: "Test # 1", completed: false },
    { title: "Test # 2" },
    { title: "Test # 3 "}
];

const App = () => {

    const [todoList, setTodoList] = useState(list);

    const addTodo = (item) => {
        setTodoList((oldlist) => [...oldlist, item]);
    }

    const removeTodo = (id) => {

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
                <List removeTodoListProp={removeTodo} list={todoList}/>
            </Section>

        </div>
    )
}

export default App