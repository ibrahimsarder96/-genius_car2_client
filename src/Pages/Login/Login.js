import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
const Login = () => {

  const handleLogin = event => {
    event.preventDefault();
  }
  return (
    <div className="hero w-full">
  <div className="hero-content  flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={login} alt="" />
    </div>
    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold">Login</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className='btn btn-primary' type="submit" value="Login" />
        </div>
        <p>New to Genius Car <Link className=' text-orange-600' to="/signUp">Sign Up</Link></p>
      </div>
    </form>
  </div>
</div>
  );
};

export default Login;