import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div className='main'>
            <div className='sub-main'>
                <div className='login-form'>
                    {/* <nav>
                        <ul><li>Temporary Navbar for testing Backend</li>
                            <li><Link to="/">Login Page</Link></li>
                            <li><Link to="/ForgotPassword">Forgot Password</Link></li>
                            <li><Link to="/ResetPassword">Reset Password</Link></li>
                        </ul>
                    </nav> */}
                    <h1>Create a New Password</h1>
                    <form className='formBody' action="#" method='post'>
                        {/* <p></p>
                        <input type="text" name='user' placeholder='username' /> */}
                        <p>Enter New Password</p>
                        <input type="password" name='password' placeholder='password' />
                        <p>Confirm Password</p>
                        <input type="password" name='password' placeholder='password' />
                        <button type='submit'>Reset Password</button>
                        {/* <p className='forgotPassword'>forgot password?</p> */}
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ResetPassword;