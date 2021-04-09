import React, { useState, useEffect } from 'react';
import BirthdayList from './birthdaylist';
import './birthreminder.css';
import { birthdata } from './birthdata';

const BirthDayReminder = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(birthdata);
    }, []);

    return (
        <main>
            <section className="rm-container">
                <h2>Birthday Reminder App Page</h2>
                <h3>{data.length} birthdays today</h3>
                <BirthdayList data={data} />
                <button type="button" onClick={() => setData([])}>Remove All</button>
            </section>
        </main>
    );
}

export default BirthDayReminder;