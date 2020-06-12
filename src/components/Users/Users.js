import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faAddressBook, faUserPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    // console.log(props);
    const { name, image, email, gender, annual_income, address, phone } = props.user;
    return (

        <div className="user-info">
            <div className="img">
                <img className="profile-image" src={image} alt="" />
            </div>

            <div className="info">
                <div className="general-info">
                    <h3>Name: {name}</h3>
                    <p>Gender: {gender}</p>
                    <p>Yearly Income: {annual_income}</p>
                    <button onClick={() => props.handleAddUser(props.user)} className="btn btn-add">
                        <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
                    <button onClick={() => props.handleBlockUser(props.user)} className="btn btn-block">
                        <FontAwesomeIcon icon={faUserMinus} /> Block Friend</button>
                </div>
                <div className="contact-info">
                    <p><FontAwesomeIcon icon={faEnvelope} className="faIcons" /> {email}</p>
                    <p><FontAwesomeIcon icon={faAddressBook} className="faIcons" /> {address}</p>
                    <h5><FontAwesomeIcon icon={faPhone} className="faIcons" /> {phone}</h5>
                </div>
            </div>

        </div>



    );
};

export default Users;