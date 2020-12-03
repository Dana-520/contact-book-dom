import React from 'react';
import {Link} from 'react-router-dom'
import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';

const Home = () => {
    return (
        <div>
            {/* <h1>Home</h1> */}

<Link to="/add">AddContact</Link>
<br></br>
<Link to="/list">ContactsList</Link>
            <AddContact/>
            <ContactsList/>
        </div>
    );
};

export default Home;