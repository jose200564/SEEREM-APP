import React from 'react';

const Login = props => {
    return(
      <div className="card"> 
  <div className="card-header" style={{backgroundColor: 'rgb(121, 197, 202)', fontSize: 30}}>
    Login Page
  </div>
  <div className="card-body">
    <form action="/Login" method="get">
      <div className="form-group">
        <label>Username</label>
        <input type="text" id="login" className="form-control" name="name" defaultValue autoComplete="off" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" id="password" className="form-control" name="name" defaultValue autoComplete="off" />
      </div>
      <div className="form-group">
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/Home" role="button">Login</a>
        </p>
      </div>
    </form>
    </div>
  </div>

       
    )
}


export default Login;
    
    
  