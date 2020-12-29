import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProd();
    }, []);

    const getProd = () => {
        axios.get(`http://localhost:3000/customer/getcart`)
            .then((result) => {
                setProducts(result.data);
                return
            })
    }

    return (
        <div className="cart">
            <table class="table ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">الاسم</th>
                        <th scope="col">السعر</th>
                        <th scope="col">ازالة</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((e, i) => (
                        <tr>
                            <th scope="row">{i}</th>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td><button className="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>
    )
}

export default Cart
