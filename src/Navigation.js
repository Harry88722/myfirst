import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './App.css';

class Navigation extends Component {
	constructor(props){
    super(props);
    this.state={
                about:'Message',
                Contact:'Contact Us',
                login:'Login'
               };
                    };
  render(){
  return (
        <div> 
          <nav className="navbar navbar-expand-sm">
          	<h3 className="navbar-brand">Nature</h3>
          	<ul className="navbar-nav ml-auto ">
    			    <li className="nav-item active ">
                <Link to="Message" className="nav-link">{this.state.about} </Link>
      				</li>
    			    <li className="nav-item">
      				  <Link to="Contact" className="nav-link">{this.state.Contact} </Link>
    			    </li>
    			    <li className="nav-item">
      				  <Link to="login" className="nav-link">{this.state.login} </Link>
    			    </li>
  			    </ul>
		      </nav>
        </div>
          );
          }
                                    }

export default Navigation;
