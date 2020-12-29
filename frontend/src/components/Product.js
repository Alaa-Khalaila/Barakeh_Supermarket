import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Cola = () => {
    const [products, setProducts] = useState([])
    const [product_id, setProduct] = useState()
    const [price, setPrice] = useState()

    useEffect(() => {
        getProd();
    }, []);

    const clickHandler = (e) => {
        setProduct(e.product_id);
        setPrice(e.price);
        addProduct(product_id,price);
        console.log(product_id)
      }
    const getProd = () => {
        axios.get(`http://localhost:3000/customer/product/${window.location.href.split('/').pop()}`)
            .then((result) => {
                setProducts(result.data);
                return 
            })
    }
    const addProduct = (product_id,price) => {
        axios.post(`http://localhost:3000/customer/additem`, {product_id,price})
        console.log(product_id)
       
    }
    return (

        <div className="row bg-light">
            {products.map((e, i) => (
                <div class="card " style={{ width: "18rem", margin: "32px", marginLeft: "50px" }}>
                    <img src={`${e.img_url}`} class="card-img-top" alt="..." />
                    <div class="card-body bg-secondary" >
                        <h5 class="card-title " style={{ color: "white" }}>{e.name}</h5>
                        <h5 class="card-title " style={{ marginTop: "20px", color: "white" }}>{e.price} jd</h5>
                        <a href="#" class="btn btn-success" onClick={()=>clickHandler(e)} >اضافة</a>

                    </div>
                </div>
            ))}

        </div>
    )
}

export default Cola
