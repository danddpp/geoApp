import React from 'react';

const formLogin = () => {
 return (
  <form className="form-inline">
    <div className="form-group mb-2">
      <label for="staticEmail2" className="sr-only">Email</label>
      <input type="text" readonly className="form-control" id="staticEmail2" placeholder="email@eample.com"/>
    </div>
    <div className="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" className="sr-only">Password</label>
      <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
    </div>
    <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
  </form>
 );
}

export default formLogin;



