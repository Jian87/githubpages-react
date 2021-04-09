import React, { useState } from 'react';

import BirthDayReminder from './birthday_reminder';
import BookList from './book/booklist';
import TourApp from './tour';
import ReviewApp from './review';

const App = () => {

    return (
        <div>
            < BirthDayReminder />
            <hr style={{ margin: "3rem" }} />
            < TourApp />
            <hr style={{ margin: "3rem" }} />
            < ReviewApp />
            <hr style={{ margin: "3rem" }} />
            <BookList />

        </div>
    )

}

export default App;