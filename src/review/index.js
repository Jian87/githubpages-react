import React from 'react';
import Review from './review';
import './reviewStyle.css';

const ReviewApp = () => {

    return (
        <main className="rv-main">
            <section className='container'>
                <div className='title'>
                    <h2>our reviews</h2>
                    <div className='underline'></div>
                </div>
                <Review />
            </section>
        </main>
    )
}

export default ReviewApp;