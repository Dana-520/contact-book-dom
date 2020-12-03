import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactsContext } from '../../contexts/ContactContext';
// import Edit from '../Edit/Edit';


const ContactsList = () => {
    const { getContactsData, contacts, deleteData, edit } = useContext(ContactsContext)
    useEffect(() => {
        getContactsData()
    }, [])
    console.log(contacts)




    return (
        <div>
            {contacts.map((contact) => {
                return <p key={contact.id}>{contact.name} {contact.surname} {contact.number}
                    <Link to="/edit">
                    <button onClick={() => edit(contact.id)}>Edit</button>
                    </Link>
                    <button onClick={() => deleteData(contact.id)}>Delete</button>
                   
                </p>

            })}
        </div>
    );
};

export default ContactsList;