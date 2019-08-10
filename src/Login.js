import React, { Component } from 'react';
import'./Login.css';




class Login extends Component {
  constructor(props){
    super(props);
    this.state={
               firstName:'',
               password:'',
               submit:''

    }
    this.updatechange = this.updatechange.bind(this);
    this.updatepassword = this.updatepassword.bind(this);
    this.updatevalue = this.updatevalue.bind(this);
  }
  updatechange=(event)=>{
    this.setState({firstName: event.target.value});

    
    

  }
  updatepassword=(event)=>{
    this.setState({password: event.target.value});

  }
  updatevalue=()=>{
    console.log(this.state.firstName)
    console.log(this.state.password)

  }
  

  

  
  render() {
    return (
      <div className="first">
          <div className="log">
              <h2>sign in</h2>
            <form>
              <div className="input-group">
                <input type="text" placeholder="enter id" value={this.state.firstName} onChange = {this.updatechange} required="required"/>
              </div>
              <div className="input-group">
                <input type="password" placeholder="password" value={this.state.password} onChange = {this.updatepassword}required="required"/>
              </div>
              <div className="input-group">
                  <input type="submit" value="Login" onClick={this.updatevalue} className="sub"/>
              </div>

         </form>
       </div>
     </div>
    );
  }
}

export default Login;