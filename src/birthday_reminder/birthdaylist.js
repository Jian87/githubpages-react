import React from 'react';

const BirthdayList = ({ data }) => {

    return (
        <>
            {data.map((person) => {
                return <Person key={person.id} {...person} />
            })}
        </>
    )
}

const Person = (person) => {
    return (
        <div className="rm-person">
            <img src={person.image} alt={person.name} />
            <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
            </div>
        </div>
    )
}

export default BirthdayList;