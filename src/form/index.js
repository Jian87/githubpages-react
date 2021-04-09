import React, { useState } from 'react';
import AddForm from './add';

const AddUser = () => {

    const [show, setShow] = useState(true);
    const ShowHide = () => {
        setShow(!show);
    };
    return <div>
        <hr style={{ margin: "2rem" }} />
        {show && < AddForm style={{ marginBottom: "2rem" }} />}
        <button type="button" onClick={ShowHide}>show/hide</button>

    </div>;

}

export default AddUser;