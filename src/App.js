 
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import {  useState } from 'react';

import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Search from './Search';
import Mycontext from './Context';



function App() {
   const [name,SetName]=useState("");
   const [phoneNumber,setPhoneNumber]=useState("");
   const [Email,SetEmail]=useState("");
   const [Password,SetPassword]=useState("");
   const [click2, setClick2] = useState(false);
   const [savedata, setdata] = useState([]);

  return (
    <Mycontext.Provider value={{name,SetName,phoneNumber,setPhoneNumber,Email,SetEmail,Password,SetPassword,click2, setClick2,savedata, setdata}}>  
    <BrowserRouter >
    <Header />
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />

    </Routes>
        
    </div>
    </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
