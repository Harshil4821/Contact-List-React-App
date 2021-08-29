import React from 'react';
import './card.css';

const Card = ({email, first_name, last_name, avatar})=>{
    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={avatar} />
                </div>
                <div className="content">
                    <h1>{first_name} {last_name}</h1>
                    <p>{email}</p>
                </div>
            </div>
        </>
    )
};

export default Card;