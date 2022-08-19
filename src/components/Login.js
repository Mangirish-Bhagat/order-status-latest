import React, { useEffect, useState, Component } from 'react';
import { Routes, Route, Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
import axios from "axios";
// import React, { Component } from "react";
// import { Switch, useHistory } from 'react-router-dom;


class LoginComponent extends React.Component {

    state = {
        loginAccess: true,
        username: "",
        password: "",
        Authlocation: [],
    }

    navigate = () => useNavigate();

    increase = () => {

        // console.log("Username:", this.state.Username);
        // console.log("Password:", this.state.Password);

        if (this.state.Username === undefined || this.state.Password === undefined) {
            alert("Please enter a Username / Password")

        } else {
            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/user_login.php', {
                username: this.state.Username,
                password: this.state.Password,

            }).then((response) => {
                console.log(response.data);
                let AuthResponse = response.data[0].auth;
                let Authlocation = response.data[0].location;
                console.log("Authlocation", Authlocation);

                if (AuthResponse === 1) {
                    this.setState({ loginAccess: false });
                    localStorage.setItem('AuthLocation', Authlocation);

                } else {
                    alert('wrong username or password');
                }

            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='sub-main'>
                    <div className='login-form'>
                        {/* <nav>
                            <ul><li>Temporary Navbar for testing Backend</li>
                                <li><Link to="/">Login Page</Link></li>
                                <li><Link to="/ForgotPassword">Forgot Password</Link></li>
                                <li><Link to="/ResetPassword">Reset Password</Link></li>
                                <li><Link to="/homepage">Homepage</Link></li>
                                <li><Link to="/newentry">New Entry</Link></li>
                            </ul>
                        </nav> */}


                        <h1>Login Form</h1>
                        <form className='formBody'>
                            <p></p>
                            <input type="text" name='user' placeholder='username'
                                onChange={
                                    (e) => this.setState({ Username: e.target.value, })}
                            />
                            <p></p>
                            <input type="password" name='password' placeholder='password'
                                onChange={
                                    (e) => this.setState({ Password: e.target.value, })}
                            />

                            <p className='forgotPassword'><Link to="/ForgotPassword">forgot password?</Link></p>
                        </form>


                        <button onClick={this.increase}>
                            {this.state.loginAccess ? (
                                <Link
                                    to="/"
                                >
                                    Login
                                </Link>
                            ) : (
                                <Link
                                    to="/homepage"
                                    state={{ data: "Hello" }}
                                >
                                    Login
                                </Link>
                            )}</button>

                    </div>

                </div>
            </div>
        )
    }
}

export default LoginComponent;


// const Login = () => {
//     return (
//         <div className='main'>
//             <div className='sub-main'>
//                 <div className='login-form'>
//                     <nav>
//                         <ul><li>Temporary Navbar for testing Backend</li>
//                             <li><Link to="/">Login Page</Link></li>
//                             <li><Link to="/ForgotPassword">Forgot Password</Link></li>
//                             <li><Link to="/ResetPassword">Reset Password</Link></li>
//                             <li><Link to="/homepage">Homepage</Link></li>
//                             <li><Link to="/newentry">New Entry</Link></li>
//                         </ul>
//                     </nav>
//                     <h1>Login Form</h1>
//                     <form className='formBody' action="#" method='post'>
//                         <p></p>
//                         <input type="text" name='user' placeholder='username' />
//                         <p></p>
//                         <input type="password" name='password' placeholder='password' />
//                         <button type='submit'>Login</button>
//                         <p className='forgotPassword'><Link to="/ForgotPassword">forgot password?</Link></p>
//                     </form>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Login;