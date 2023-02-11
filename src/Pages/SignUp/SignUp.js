import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
const SignUp = () => {
  const handleSignUp = event => {
    event.preventDefault();
  }
  return (
    <div className="hero w-full">
    <div className="hero-content  flex-col lg:flex-row">
      <div className="text-center lg:text-left">
        <img className='w-3/4' src={login} alt="" />
      </div>
      <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-5xl text-center font-bold">Sign Up</h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
          </div>
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
           
          </div>
          <div className="form-control mt-6">
          <input className='btn btn-primary' type="submit" value="SignUp" />
          </div>
          <p>Already have an account? <Link className=' text-orange-600' to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUp;