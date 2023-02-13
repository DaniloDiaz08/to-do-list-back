import React, { useState } from "react";

const Todo = () => {

    const [isEditing, setIsEditing] = useState(false);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    }

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
    

        if(key === 13 || key === 27){
            setIsEditing(false);
        }
    }

    return (

        isEditing ?

        //<input />:

        <div className="row" onDoubleClick={handleDivDoubleClick}>
            <div className="column seven wide">
                <div className="ui input fluid">
                    <input onKeyDown={handleInputKeyDown} />
                </div>
            </div>
        </div> :
        <div className="row" onDoubleClick={handleDivDoubleClick}>
            <div className="column five wide">
                <h1>Test</h1>
            </div>
        
            <div className="column two wide">
                <button className="ui button circular icon green">
                    <i className="white check icon"></i>
                </button>
            </div>
            
            <div className="column two wide">
                <button className="ui button circular icon red">
                    <i className="white remove icon"></i>
                </button>
            </div>
        </div>
    );

    //     <div className="row">
    //         <div className="column five wide">
    //             <h1>Tarea</h1>
    //         </div>

    //         <div className="column two wide">
    //             <button className="ui button circular icon green">
    //                 <i className="white check icon"></i>
    //             </button>
    //         </div>

    //         <div className="column two wide">
    //             <button className="ui button circular icon red">
    //                 <i className="white remove icon"></i>
    //             </button>
    //         </div>
    //     </div>
    // )
}

export default Todo

// At begin, the component List contains this section.
// Now, this component has the work to-do and two buttons: red and green