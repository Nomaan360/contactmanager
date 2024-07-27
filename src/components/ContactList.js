import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList = (props) => {

    let redercontact=props.contact.map((co)=>{
        return <ContactCard contact={co} key={co.id} removeContact={props.removeContact}/>
        // return (
        //     <div className="item">
        //         <div className="content">
        //             <div className="header">{contact.name}</div>
        //             <div>{contact.email}</div>
        //         </div>
        //         <i className="trash alternate outline icon"></i>
        //     </div>
        // );
    });
    return (
        <div className="main">
            <h2>Contact List
            </h2>
            <div className="ui celled list">{redercontact}</div>
                 <Link to='/add'>
                    <button className="ui button blue right">Add CONTACT</button>
                </Link>
        </div> 

    )
}
export default ContactList;