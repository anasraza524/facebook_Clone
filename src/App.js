import NavBar from './navBar'
import PostLoader from './component/profile/PostLoader'
 import Rightpannel from './rightpannel'
import Middlepannel from './middlepannel'
 import Leftpannel from './leftpannel'
 import Home from './component/home/'
import Profile from './component/profile'
import Page from './component/page'
import Vidoe from './component/vidoe'
import Gruop from './component/group'
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";


 function App() {
  
  const [themeMode, setThemeMode] = useState("dark")

  const toggleThemeMode = () => {
    if (themeMode === "dark") {
    setThemeMode("light")
    }
    else{
    setThemeMode("dark")
    }
 
  }
 
  return (
   
   

      <div 
      style={{}}
       className={` ${themeMode==="dark"?"dark":"light"}`}>
         <Router>
    <NavBar toggleThemeMode={toggleThemeMode} mode={themeMode}/>
<div className='container'>
     {/* <div><Rightpannel/></div> */}
    
  
    <Routes>
          <Route index element={<Home/>} />
          <Route path="Home" element={<Home/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="page" element={<Page/>} />
          <Route path="vidoe" element={<Vidoe/>} />
          <Route path="gruop" element={<Gruop/>} />
        </Routes>
        <div><Leftpannel/></div>
    </div>
    
  
    </Router>
    </div>
    
  
   
  );
}
export default App;