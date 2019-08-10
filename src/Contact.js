import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
  constructor(props){
      super(props);
    this.state={
                   FirstName: "",
                   LastName:"",
                   Mobile: "",
                   Email : "",
                  

    
      
      };
    
    }
  myfirst = (event) =>{
 this.setState ( { [event.target.name] :event.target.value  } )
}
aftefeel = (event) => {
 console.log (`first name= ${this.state.FirstName}. 
              last name= ${this.state.LastName}.
              mobile no= ${this.state.Mobile}.
              email id= ${this.state.Email},
             
  `);
}
  
  render(){
    return (
        <div className="firstco">
            <div className="secondco">
                <div className="thirdco">
               <form>
                  <lable>First Name</lable><br/>
                     <input type="text"  name="FirstName" value={this.state.FirstName} onChange={this.myfirst}/><br/>
                  <lable>Last Name</lable><br/>
                     <input type="text" value={this.state.LastName} name="LastName" onChange={this.myfirst}/><br/>
                  <lable>Mobile Number</lable><br/>
                     <input type="Number" value={this.state.Mobile} name="Mobile" onChange={this.myfirst}/><br/>
                  <lable>Email Address</lable><br/>
                     <input type="email" value={this.state.Email} name="Email" onChange={this.myfirst}/><br/>
                  
                  <input type="submit" value="Submit"onClick={this.aftefeel} className="sum"/>
              
          

              </form>

 
                </div>

              </div>


      </div>





        );
    }
}

export default Contact;