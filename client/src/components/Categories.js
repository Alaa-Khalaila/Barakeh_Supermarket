import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCat();
    }, []);

    const getCat = () => {
        axios.get("http://localhost:3000/customer/getcat")
            .then((result) => {
                setCategories(result.data);
            })
    }
    return (
        <div className="bg-light" style={{height:"100vh"}}>
            <div className="prod">
                <div className="border" />
                <div className="imgs">
                    {categories.map((e, i) => (
                        <Link to={`/products/${e.category_id}`}>
                            <img src={`${e.img_url}`} alt="" />
                        </Link>
                ))}
                </div>
                
            </div>
        </div>



    )
}

export default Categories
