import React, { useReducer } from 'react';
import axios from 'axios';

export const ContactsContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    editContact: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS_DATA":
            return { ...state, contacts: action.payload }
        case "EDIT_CONTACT":
            console.log(action);
            return { ...state, editContact: action.payload }
        default: return state
    }
}


const ContactsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function addContact(newContact) {
        await axios.post('http://localhost:8000/contacts', newContact)
        getContactsData()
    }

    async function getContactsData() {
        const { data } = await axios.get('http://localhost:8000/contacts')

        dispatch({
            type: "GET_CONTACTS_DATA",
            payload: data
        })
    }

    async function deleteData(id) {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getContactsData()
    }

    async function edit(id) {
        // console.log(id);
        const { data } = await axios.get(`http://localhost:8000/contacts/${id}`)
        // console.log(data);
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveContact = async (newContact) => {
        await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact)
        getContactsData()
    }



    return (
        <ContactsContext.Provider value={{
            contacts: state.contacts,
            editContact: state.editContact,
            addContact,
            getContactsData,
            deleteData,
            edit,
            saveContact
        }}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContextProvider;