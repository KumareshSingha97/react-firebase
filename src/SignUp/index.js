import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore'
import { auth, db } from '../FireBase/config';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {
    const userCollction = collection(db, 'users')
    const navigate = useNavigate()
    const [lo_userRegistration, setUserRegistration] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserRegistration({ ...lo_userRegistration, [name]: value })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await createUserWithEmailAndPassword(auth, lo_userRegistration.email, lo_userRegistration.password)
            // await addDoc(userCollction, lo_userRegistration);
            alert("Succesfully Created!");
            navigate('/login')
        } catch (error) {

        }

    }

    return (
        <div>
            <div className="header-form">
                <h3 className="text-primary text-center">Sign Up</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                    </div>
                    <input name='name' type="text" className="form-control" placeholder="Full name"
                        value={lo_userRegistration.name} onChange={handelChange}

                    />
                </div>
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
                <button type="submit" className="btn btn-secondary btn-block">Signup</button>
                <div className="message">
                    <RouterLink to="/login">Already have an account?</RouterLink>
                </div>
            </form>
        </div>
    )
}

export default SignUp