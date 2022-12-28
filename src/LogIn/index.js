import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";
import { auth } from '../FireBase/config';
import { setUser } from '../Store/common';
import './style.css'
const LogIn = () => {
  
   const dispatch= useDispatch()
    const [lo_userRegistration, setUserRegistration] = useState({
        email: '',
        password: '',
    })
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({ ...lo_userRegistration, [name]: value })
    }
    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const userLogId = await signInWithEmailAndPassword(auth, lo_userRegistration.email, lo_userRegistration.password)
            // await addDoc(userCollction, lo_userRegistration);
            console.log(userLogId._tokenResponse.localId);
            dispatch(setUser(userLogId._tokenResponse.localId))
            alert("Succesfully Logged In!");
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <div>
            <div className="header-form">
                <h3 className="text-primary text-center">Log In</h3>
            </div>
            <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                    </div>
                    <input value={lo_userRegistration.email} onChange={handelChange} name='email' type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-lock"></i></span>
                    </div>
                    <input value={lo_userRegistration.password} onChange={handelChange} name='password' type="password" className="form-control" placeholder="Password" >
                        {/* <span className="icon" onClick={toggle}>
                            {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </span> */}
                    </input>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Login</button>
                <div className="message">
                    <RouterLink to="/signup">Create an account</RouterLink>
                </div>
            </form>
        </div>
    )
}

export default LogIn