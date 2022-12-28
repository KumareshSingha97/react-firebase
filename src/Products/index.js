import { collection, getDocs, deleteDoc,doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../FireBase/config'
import './style.css'

const Products = () => {
    const [lo_products, setProducts] = useState([])
    const navigate = useNavigate();
    const productCollection = collection(db, 'products')
    useEffect(() => {
        getProdductList()
    }, [])

    const getProdductList = async () => {
        try {
            console.log('call');
            const res = await getDocs(productCollection);

            setProducts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        } catch (error) {

        }

    }

    console.log(lo_products);
    const deleteDocByID = async (id) => {
        const products = doc(db, 'products', id)
        await deleteDoc(products);
        getProdductList()
    }

    const action = (doc) => {
        return (
            <div>
                <button onClick={() => deleteDocByID(doc.id)}>Delete</button>
                <button onClick={() => navigate("/product/update/" + doc.id)}>Update</button>
            </div>

        )

    }
    const updateProduct = (id) => {

    }

    return (
        <div className="container">
            <Link to="/product/add" key="1">
                <button>Add Product</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Offer Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lo_products.map(item => {
                            return <tr >
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.offer_price}
                                </td>
                                <td>
                                    <div>
                                        {
                                            action(item)
                                        }
                                    </div>

                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </div>
    )


}

export default Products