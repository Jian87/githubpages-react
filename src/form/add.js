import React, { useState } from 'react';

const AddUserForm = () => {

    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const user = { id: new Date().getTime().toString(), name };
            setUsers((users) => { return [...users, user] });
            setName('');
        } else {
            console.log("empty input");
        }
    };

    const removeItem = (id) => {
        let newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
            <button type="submit">add user</button>
        </form>
        <hr style={{ marginTop: "2rem" }} />
        {users.map((user) => {
            return <div key={user.id} style={{ marginTop: "0.5rem" }}>
                <p>{user.name}</p>
                <button type="button" onClick={() => removeItem(user.id)}> remove </button>
            </div>
        })}
    </>
}

export default AddUserForm;