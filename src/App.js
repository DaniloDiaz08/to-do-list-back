import React from "react";
import Form from "./components/Form";
import Section from "./components/Section";

const appTitle = "To-Do-App";

const App = () => {
    return (
        <div className="ui container center aligned">
            <section>
                <h1>
                    {appTitle}
                </h1>
            </section>

            <section>
                <Form />
            </section>
        </div>
    )
}

export default App