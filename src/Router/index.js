import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { auth } from '../FireBase/config';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout.js';
import LogIn from '../LogIn/index';
import Products from '../Products';
import AddProduct from '../Products/AddProduct';
import UpdateProduct from '../Products/UpdateProduct';
import SignUp from '../SignUp/index';


const Routers = () => {
    const [ls_userId, setUserId] = useState({});
    // const ls_currentUser = useSelector(state => state.common.user);
    onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
    })
 
   
    // setUserId(ls_currentUser)
    
    return (
        <BrowserRouter>

            {ls_userId == null && <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/" element={<AuthLayout />}>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
                <Route path='/*' element={<Navigate replace to="/login" />} />
            </Routes>
            },
            {
              
                ls_userId != null &&
                <Routes>
                    <Route path="/" element={<Navigate replace to="/product" />} />
                    <Route path="/" element={<MainLayout></MainLayout>}>
                       <Route path="/product/update/:id" element={<UpdateProduct></UpdateProduct>} />
                        <Route path="/product/add" element={<AddProduct></AddProduct>} />
                        <Route path="/product" element={<Products></Products>} />
                    </Route>
                    <Route path='/*' element={<Navigate replace to="/product" />} />
                </Routes>
            
            }


        </BrowserRouter>
    )
}

export default Routers