import React, { Component } from 'react';

import Header from '../../Components/LoginComponents/HeaderLogin';

import Footer from '../../Components/LoginComponents/FooterLogin';

class Login extends Component {
  render(){
    return(
      <div className="login">
         <Header/>
         <Footer/>         
      </div>
    )
  }
}

export default Login;
