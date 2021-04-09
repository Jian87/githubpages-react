import React, { useState } from 'react';

import BirthDayReminder from './birthday_reminder';
import BookList from './book/booklist';

const App = () => {

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
            < BirthDayReminder />
            <hr style={{ margin: "3rem" }} />
            <BookList />
            {/* <h2>{text}</h2>
            <button type='button' onClick={handleClick}>change text</button> */}
        </div>
    )

}

export default App;