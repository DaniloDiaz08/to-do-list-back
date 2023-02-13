import React from "react";
import Todo from "./Todo";

const List = () => {
    return (
        <div className="ui grid center aligned">
            <Todo />
        </div>
    )
}

export default List

// This component call the component Todo, which has every work to-do
// This component show us the list of all works that exist in the database