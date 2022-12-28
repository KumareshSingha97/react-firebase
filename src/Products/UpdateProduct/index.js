import { addDoc, collection, doc } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

import { db } from '../../FireBase/config';

const UpdateProduct = () => {
   
    const productCollction = collection(db, 'products')
    const { id } = useParams()
    const [lo_productDetails, setProductDetails] = useState({
        name: '',
        file: '',
        price: '',
        offer_price: '',

    })
    
    useEffect(()=>{
      const products= doc(db,'products',id)
      console.log(products);
      setProductDetails(products)

    },[])
    






    const handelChange = (e) => {
        const name = e.target.name;
        const value = name=='file'?e.target.files[0]:e.target.value;
        console.log(name, value);
        setProductDetails({ ...lo_productDetails, [name]: value })
    }
    const handelUpdateProduct = async(e) => {
        e.preventDefault()
        try {
            // await addDoc(productCollction, lo_productDetails);
            // alert("Succesfully Created!");
        } catch (error) {
            alert(error.message);
        }
       
    }
    return (

        <div className="container">
            <div className='form-box'>
                <div className="body-form">
                    <h2>update:</h2>
                    <form onSubmit={handelUpdateProduct}>

                        <div className="input-group mb-3">

                            <input value={lo_productDetails.email} onChange={handelChange} name='name' type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="input-group mb-3">
                            <h4>Add Image:</h4>
                             <input value={lo_productDetails.file} onChange={handelChange} name='image' type="file" className="form-control" placeholder="image" >
                            </input>
                        </div>
                        <div className="input-group mb-3">
                            <input value={lo_productDetails.price} onChange={handelChange} name='price' type="text" className="form-control" placeholder="Price" />
                        </div>
                        <div className="input-group mb-3">
                            <input value={lo_productDetails.offer_price} onChange={handelChange} name='offer_price' type="text" className="form-control" placeholder="Offer Price" />
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block">Add</button>

                    </form>
                </div></div></div>
        // <div className="header-form">
        //     <h3 className="text-primary text-center">Add Product</h3>
        // </div>



    )
}

export default UpdateProduct