
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {useEffect, useState} from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let contactList
  if(localStorage.getItem("contact")===null){
    contactList=[]
  }
  else{
    contactList=JSON.parse(localStorage.getItem("contact"))
  }
const [contact,setContact]=useState(contactList)
const contacthandler=(c)=>{
  console.log(contact.length);

  setContact([...contact,{id:uuid(),...c}])
}
const removeContact=(id)=>{
  console.log(id);
  const newContact=contact.filter((con)=>{
    return con.id!==id;
  })
  console.log(newContact);
  setContact(newContact)

}

useEffect(()=>{ 
  localStorage.setItem("contact",JSON.stringify(contact))
},[contact])
  return (
    <div className="ui container">
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route
         path="/" exact
        Component={()=><ContactList contact={contact} removeContact={removeContact}/>}
        //render={(props)=>(<ContactList {...props} contact={contact} removeContact={removeContact}/>)}
        />
        <Route path="/add" Component={()=><AddContact contacthandler={contacthandler}/>}/>
      </Routes>
      {/* <AddContact contacthandler={contacthandler}/> 
      <ContactList contact={contact} removeContact={removeContact}/>  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
