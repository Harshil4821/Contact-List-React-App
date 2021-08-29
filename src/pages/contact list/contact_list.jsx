import React, {useEffect, useState} from 'react';
import './contact_list.css';
import Header from '../../components/header/header';
import {GetContactList} from '../../api service/api calls/get_contact_list';
import Card from '../../components/card/card';

const ContactList = ()=>{
    const [contact_details, setContactDetails] = useState([]);

    useEffect(()=>{
        GetContactList({}, (data)=>{
            setContactDetails(data.data);
            console.log("Got Data in Contact List.jsx",data);
        }, (err)=>{
            console.log("Got Error in Contact List.jsx", err);
        })
    }, [])
    return (
        <>
            
            <div className="contact_list" id="contact_list">
                <Header />
                {contact_details.map((v)=>{
                    return <Card email={v.email} first_name={v.first_name} last_name={v.last_name} avatar={v.avatar} />
                })}
            </div>
        </>
    )
};

export default ContactList;