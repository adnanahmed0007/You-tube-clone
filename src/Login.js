import React, { useState } from "react";
import Mycontext from "./Context";
import { useContext } from "react";
import axios from "axios"
import "./Login.css";
const Login = () => {
  const {
    name,
    SetName,
    phoneNumber,
    setPhoneNumber,
    Email,
    SetEmail,
    Password,
    SetPassword,
  } = useContext(Mycontext);
  const [click,setClick8]=useState(false);
  async function  HandleSubmit(e) {
    e.preventDefault();
    if(click)
    {
      try{
        if(name&&phoneNumber&&Email&&Password)
        {
           const response=  await axios.post("http://localhost:7861/api/auth/login",{
                name,
                Email,
                Password,
                phoneNumber,

             })
             if(response)
             {
                console.log(response.data.detail.Email);
             }
             else 
             {
                console.log("b")
             }
        }
        
      }
      catch(e)
      {
         
     
      }

    }
    
  }
  return (
    <div>
    <form onSubmit={HandleSubmit}>
    <div className="input_field">
    <label htmlFor="name"><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(e) => SetName(e.target.value)}
      />
        <label htmlFor="phoneNumber"><b>Mobile No</b></label>
      <input
        type="number"
        placeholder="Enter the phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <label htmlFor="email"><b>Email</b></label>
      <input
        type="text"
        placeholder="Enter the email"
        onChange={(e) => SetEmail(e.target.value)}
      />
          <label htmlFor="psw"><b>Password</b></label>
      <input
        type="text"
        placeholder="Enter the password"
        onChange={(e) => SetPassword(e.target.value)}
      />
      
      <button
            type="submit" // This will trigger the form's onSubmit event
            onClick={() => setClick8(!click)} // Optional: Toggle click1 if needed
          >
            Submit
          </button>

      </div>
      </form>
      <div>
      {click && name && Email  && phoneNumber && Password && (
                        <div className="user-details">
                            <h2>Your Details</h2>
                            <p>Your name in the database is saved as {name}</p>
                           
                            <p>Your email in the database is saved as {Email}</p>
                            <p>Your phone number in the database is saved as {phoneNumber}</p>
                        </div>
                    )}
      </div>
    </div>
  );
};

export default Login;
