import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false)

    const msg = (name, phone, message) => {
        setSent(true)
        axios.post("http://localhost:3000/customer/sendmessage", { name, phone, message })
        
    }

    return (
        <div className="cont1">
            <div class="container contact-form">
                <div class="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form>
                    <h3>ارسل لنا رسالة</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="اسمك *" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="بريدك الالكتروني *" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="رقم تلفونك *" onChange={(e) => { setPhone(e.target.value) }} />
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="رسالتك *" style={{ width: "100%", height: " 150px" }} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact" value="ارسل" style={{ marginLeft: "50%" }} onClick={() => { msg(name, phone, message) }} />
                            </div>
                            {sent ? <div class="alert alert-primary" role="alert">
                                شكرا لك , سيتم التواصل معك في اقرب وقت
                                </div>:""}
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact

