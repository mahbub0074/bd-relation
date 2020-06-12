import React from 'react';
import './Summery.css'
const Summery = (props) => {
    const friend = props.friend;
    console.log(friend);
    const fname = friend.map(friend => <li>{friend.name}</li>);
    const totalIncome = friend.reduce((totalIncome, income) => totalIncome + parseInt(income.annual_income), 0);

    return (
        <div>
            <h3>Friend List</h3>
            <h5 className="friends-container">Total Users:{props.users.length}</h5>
            <h5 className="friends-container">Total Friends:{friend.length}</h5>
            <h5 className="friends-container">Blocked users: {props.block.length}</h5>
            <h5 className="friends-container">Total Income:{totalIncome}</h5>
            <h4>{fname}</h4><br />
        </div>
    );
};

export default Summery;