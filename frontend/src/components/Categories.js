import React, { useState, useEffect } from 'react'
import axios from 'axios';

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
        <div>
            <div className="prod">
                <div className="border" />
                <div className="imgs">
                    {categories.map((e, i) => (
                    <img src={`${e.img_url}`} alt="" />
                ))}
                </div>
                
            </div>
        </div>



    )
}

export default Categories
