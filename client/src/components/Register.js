import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();
    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [fields, setFields] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [userErr, setUserErr] = useState(false)


    const signup = (user_name, email, password, phone) => {
        axios.post("http://localhost:3000/account/signup", { user_name, email, password, phone })
            .then((response) => {
                setFields(false)
                setEmailErr(false)
                setUserErr(false)
                if (response.data === "Please fill out all fields") {
                    setFields(true)
                } else if (response.data === "Email is already used.") {
                    setEmailErr(true)
                } else if (response.data === "User name is already used.") {
                    setUserErr(true)
                } else {
                    history.push("/");
                }
            })
    }

    return (
        <div className="cont">
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p>تسجيل حساب جديد في سوبر ماركت البركة</p>
                    </div>
                    {fields ? <div className="form-content" style={{ color: "red", fontSize: "20px" }}>الرجاء ادخال جميع المعلومات *</div> : ""}
                    {emailErr ? <div className="form-content" style={{ color: "red", fontSize: "20px" }}>البريد الالكتروني مستخدم بالفعل *</div> : ""}
                    {userErr ? <div className="form-content" style={{ color: "red", fontSize: "20px" }}> الاسم مستخدم بالفعل *</div> : ""}
                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="اسمك *" onChange={(e) => { setUserName(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="رقم تلفونك *" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="كلمة السر *" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="البريد الالكتروني *" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btnSubmit" onClick={() => { signup(user_name, email, password, phone) }}>تسجيل</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
