import React, { useState } from 'react';
import './Login.css';
import AccountCircleIcon from '../Image/icon image.png';
import EmailIcon from '../Image/mail.png';
import MailLockIcon from '../Image/email lock.png';
import axios from 'axios';
// import Validation from './Validation';`
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // function handleChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const email = target.email;
    //     const password = target.password;
    //     let item = {...this.state.item};
    //     item[email] = value;
    //     item[password] = value;
    //     this.setState({item});
    // }

    function handleSubmit(data) {
        console.log(data);
        axios.post("https://localhost:8080/login", { email: data.email, password: data.password })
            .then(response => {
                return response.json()
            })
    }

    //   const {item} = this.state;
    return (

        <div className='main'>
            <div className='sub-main'>


                <div>

                    <div>
                        <img src={AccountCircleIcon} alt='Account' className='AccountCircleIcon' />
                    </div>
                    <h1>User Login</h1>
                    <form >
                        <div >
                            <img src={EmailIcon} alt='EmailIcon' className='EmailIcon' />
                            <input type='text' name="email" placeholder='User name' className='name' value={email}
                                onChange={(event) => setEmail(event.target.value)} autoComplete="email" />

                            {/* {errors.email && <p style={{ colour: "red" }}>{errors.email}</p>} */}
                        </div>
                        <div className='second-input'>

                            <img src={MailLockIcon} alt='MailLockIcon' className='EmailIcon' />
                            <input type='password' name="password" placeholder='Password' className='name' value={password}
                                onChange={(event) => setPassword(event.target.value)} autoComplete="password" />
                            {/* <label onClick={handleShow()}>{show ? "Hide" : "Show"}</label> */}
                            {/* {errors.password && <p style={{ colour: "red" }}>{errors.password}</p>} */}

                        </div>
                        <div className='login-button'></div>
                        <Link to="products">
                            <button onClick={() => {
                                let data = {
                                    email: email,
                                    password: password,
                                };
                                handleSubmit(data);
                            }}>Login</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;