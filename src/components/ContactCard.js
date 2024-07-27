import React from "react";
import img from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({contact,removeContact}) => {
    const {id,name,email}=contact;
    return (
        <div className="item">
            <img src={img} alt="rtre" id={id} className="ui img avatar"></img>
            <div className="content">
                {/* <Link to={{ pathname:`/contact/${id}`, state:{contact:contact}}}> */}
                <div className="header">{name}</div>
                <div>{email}</div>
                {/* </Link> */}
            </div>
            <i className="trash alternate outline icon"  onClick={() => removeContact(id)} style={{color:'red',marginTop:'7px'}}></i>
        </div>
    );
}

export default ContactCard;