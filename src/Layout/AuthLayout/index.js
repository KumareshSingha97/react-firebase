import React from 'react'
import { Outlet } from 'react-router'
import './style.css'
const AuthLayout = () => {
    return (
        <div className="container">
            <div className='form-box'>
                <div className="body-form">

                    <Outlet></Outlet>

                </div>
            </div>

        </div>
    )
}

export default AuthLayout