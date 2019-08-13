import React from 'react';
import { BrowserRouter, Route,} from "react-router-dom";
import App from './App.js';
import Message from './Message.js';
import Navigation from './Navigation.js';
import Contact from './Contact.js';
import Login from './Login.js';


import Footer from './Footer.js';




import './App.css';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <switch>
          <Route path="/" exact component={App} />
          <Route path="/Message" component={Message}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Login" component={Login}/>
       
        </switch>
        <Footer/>
       
    
     </BrowserRouter>
    
    </div>
  );

}

export default Router;
