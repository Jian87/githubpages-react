import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {

    console.log("hello world");

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = reviews[index];

    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }

        if (number < 0) {
            return reviews.length - 1;
        }

        return number;
    }

    const prevPerson = () => {
        setIndex(checkNumber(index - 1));
    }

    const nextPerson = () => {
        setIndex(checkNumber(index + 1))
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if (randomNumber == index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>

                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                surprise me
            </button>
        </article>
    );
}

export default Review;