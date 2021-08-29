import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/header';
import ContactList from './pages/contact list/contact_list';

const App = ()=>{
    return (
        <>
            <Route path="/" component={ContactList} exact></Route>
            {/* <Route path="/details" component={ContactDetail} exact></Route> */}
        </>
    )
};

export default App;