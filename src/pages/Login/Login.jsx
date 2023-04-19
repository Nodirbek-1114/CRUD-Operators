import React from 'react';
import './index.css'

const index = () => {
    return (
        <div className="container">
            <form className='form'>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='form-title'>CRUD OPERATIONS</h1>

                    <span className='form-signIn'>Sign In</span>
                    <span className='form-enter-account'>Enter your credentials to access your account</span>
                </div>
                <div class="mb-4">
                    <label for='email'>Email</label>
                    <input type="email" id="email" class="form-control" placeholder='Enter your email' />
                </div>

                <div class="mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" id="password" class="form-control" placeholder='Enter your password' />
                </div>

                <button type="submit" class="btn btn-signIn btn-block mb-4">Sign in</button>

                <div class="text-center">
                    <div class="col">
                        <span>Forgot your password? </span>
                        <a href="#!" className='reset'> Reset password</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default index;