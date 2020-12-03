import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../../contexts/ContactContext'
import { Link } from 'react-router-dom'
const Edit = () => {
    const { editContact, saveContact } = useContext(ContactsContext)
    const [edited, setEdited] = useState('')
    //console.log(edited);

    //console.log(!!edited == false);

    useEffect(() => {
        setEdited(editContact)
    }, [editContact])


    function handleEditInput(e) {
        let newConact = {
            ...edited,
            [e.target.name]: e.target.value
        }
        setEdited(newConact)

    }
    return (
        <div>
            {!!edited ? <>
                <input name="name" onChange={handleEditInput} value={edited.name} type="text" />
                <input name="surname" onChange={handleEditInput} value={edited.surname} type="text" />

                <input name="number" onChange={handleEditInput} value={edited.number} type="number" />
                <Link to="/">
                <button onClick={() => saveContact(edited)} >SAVE</button>
                </Link>
               
            </> : 'FALSE'}
        </div>
    );
};

export default Edit;