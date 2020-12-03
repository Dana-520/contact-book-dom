import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddContact from './components/AddContact/AddContact';
import ContactsList from './components/ContactsList/ContactsList';
import Edit from './components/Edit/Edit';
import Home from './components/Home/Home';
const Routes = () => {
    return (
       <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/add" component={AddContact}/>
           <Route exact path="/list" component={ContactsList}/>
           <Route exact path="/edit" component={Edit}/>
       </Switch>
       </BrowserRouter>
    );
};

export default Routes;