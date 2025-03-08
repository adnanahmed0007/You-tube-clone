import React, { useState } from "react";
import Mycontext from "./Context";
import { useContext } from "react";
import "./Register.css"
import axios from "axios"
const Register = () => {
  const {
    
    
    Email,
    SetEmail,
    Password,
    SetPassword,
  } = useContext(Mycontext);
  const [click1,setClick]=useState(false);
  async function  HandleSubmit(e) {
    e.preventDefault();
    if(click1)
    {
      try{
        if(Email&&Password)
        {
           const response=  await axios.post("http://localhost:7861/api/auth/regsiter",{
                
                Email,
                Password,
                

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
            onClick={() => setClick(!click1)} // Optional: Toggle click1 if needed
          >
            Submit
          </button>

      </div>
      </form>
      <div>
      {click1 && Email  && Password && (
                        <div className="user-details">
                            <h2>Your Details</h2>
                           
                            <p>Your email in the database is saved as {Email}</p>
                             
                        </div>
                    )}
      </div>
    </div>
  );
};

export default Register;
