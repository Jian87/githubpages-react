import React, { useState } from 'react';
import { books } from './books';
import { Book } from './Book';
import { App } from './app'
import AddUser from './form';

const BookList = () => {

    const [show, setShow] = useState(true);

    return (
        <div>
            <section className='header'>
                <App />
                <AddUser />
            </section>

            <section className='booklist'>

                {books.map((book) => {
                    return (
                        <Book key={book.id} {...book} />
                    );
                })}

            </section>

        </div>
    );
};

export default BookList;