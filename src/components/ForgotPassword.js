import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'react-popup';

class ForgotPassword extends React.Component {

    state = {
        lostEmail: "",
    }

    // navigate = () => useNavigate();
    forgetFunction = () => {
        console.log('Forgot', this.state.lostEmail)

        if (this.state.lostEmail === undefined || this.state.lostEmail === "") {
            alert("Please enter Email")

        } else {
            axios.post(' https://kaushalskillacademy.in/test/orders_ops/user/forgot_password.php', {
                email: this.state.lostEmail,

            }).then((response) => {
                console.log(response.data);
                let emailAuth = response.data[0].auth

                if (emailAuth === 3) {
                    console.log(response.data[0].success);
                    let emailSuccess = response.data[0].success
                    alert(emailSuccess);

                } else {
                    alert("Incorrect email")
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
                        <nav>
                            <ul>
                                <li><Link to="/">Login Page</Link></li>
                                {/* <li>Temporary Navbar for testing Backend</li>
                                <li><Link to="/ForgotPassword">Forgot Password</Link></li>
                                <li><Link to="/ResetPassword">Reset Password</Link></li> */}
                            </ul>
                        </nav>
                        <h1>Forgot Password?</h1>
                        <form className='formBody' action="#" method='post'>
                            <p>Enter Username</p>
                            <input type="text" name='user' placeholder='username'
                                onChange={
                                    (e) => this.setState({ lostEmail: e.target.value, })}
                            />

                            {/* <p></p>
                        <input type="password" name='password' placeholder='password' /> */}
                            {/* <p className='forgotPassword'>forgot password?</p> */}
                        </form>
                        <button onClick={this.forgetFunction}>Reset Password</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ForgotPassword;

// const ForgotPassword = () => {
//     return (
//         <div className='main'>
//             <div className='sub-main'>
//                 <div className='login-form'>
//                     {/* <nav>
//                         <ul><li>Temporary Navbar for testing Backend</li>
//                             <li><Link to="/">Login Page</Link></li>
//                             <li><Link to="/ForgotPassword">Forgot Password</Link></li>
//                             <li><Link to="/ResetPassword">Reset Password</Link></li>
//                         </ul>
//                     </nav> */}
//                     <h1>Forgot Password?</h1>
//                     <form className='formBody' action="#" method='post'>
//                         <p>Enter Username</p>
//                         <input type="text" name='user' placeholder='username' />
//                         {/* <p></p>
//                         <input type="password" name='password' placeholder='password' /> */}
//                         {/* <p className='forgotPassword'>forgot password?</p> */}
//                     </form>
//                     <button type='submit'>Reset Password</button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ForgotPassword;