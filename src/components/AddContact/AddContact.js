import React, { useContext, useState } from 'react';


import {ContactsContext} from '../../contexts/ContactContext'

const AddContact = () => {
    const [nameInpValue, setNameInpValue] = useState('')
    const [surnameInpValue, setSurnameInpValue] = useState('')
    const [numberInpValue, setNumberInpValue] = useState('')
  
    const { addContact } = useContext(ContactsContext)



    function handleClick () {
        let newObj = {
            name: nameInpValue,
            surname: surnameInpValue,
            number: numberInpValue

        }

        addContact(newObj)
        setNameInpValue('')
        setSurnameInpValue('')
        setNumberInpValue('')
    }

    
    

    return (
        <div>
            <h1>AddContact</h1>
            <input value = {nameInpValue} onChange={(e) => setNameInpValue(e.target.value)}type="text" placeholder="name" />
            <input value = {surnameInpValue}onChange={(e) => setSurnameInpValue(e.target.value)}type="text"  placeholder="surname" />
            <input value = {numberInpValue}onChange={(e) => setNumberInpValue(e.target.value)}type="number"  placeholder="number" />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddContact;