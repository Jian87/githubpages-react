import React from 'react';
import { books } from './books';
import { Book } from './Book';
import AddUser from '../form';
import './book.css';

const BookList = () => {

    return (
        <div>
            <section className='header'>
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