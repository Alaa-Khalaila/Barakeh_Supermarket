import React from 'react'

const Cart = () => {
    return (
        <div className="cart">
            <table class="table ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">الاسم</th>
                        <th scope="col">العدد</th>
                        <th scope="col">السعر</th>
                        <th scope="col">ازالة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button className="btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart
