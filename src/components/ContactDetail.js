import React from "react";
import img from "../images/user.png";

const ContactDetail = (props) => {
    console.log(props);
    return (
        <>
        <br/>
        <br/>
        <br/>
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={img} alt="rtre" className="ui img avatar"></img>
                </div>
                <div className="content">
                    <h4 className="header"> name</h4>
                    <h4 className="description">email</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactDetail;