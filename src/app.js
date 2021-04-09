import React, { useState } from 'react';

export const App = () => {

    const [text, setText] = useState("Random");
    const handleClick = () => {
        if (text === 'Random') {
            setText('Hello World');
        } else {
            setText("Random");
        }
    };

    return (
        <div>
            <h2>{text}</h2>
            <button type='button' onClick={handleClick}>change text</button>
        </div>
    )

}