import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Log in</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input type="submit" className='btn-submit' value='Log in' />
            </form>
            <p className='form-link'>New to ema john ?<Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;