import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logErr, setLogErr] = useState(false);

    const log = (email, password) => {
        axios.post("http://localhost:3000/account/login", { email, password })
            .then((response) => {
                if (response.data === "Email or password is incorrect") {
                    setLogErr(true)
                } else {
                    setLogErr(false);
                    history.push("/");
                }
            })
    }
    return (
        <div className="cont">
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p> الدخول الى حسابك في سوبرماركت البركة</p>
                    </div>
                    {logErr ? <div className="form-content" style={{ color: "red", fontSize: "20px" }}>البريد الالكتروني او كلمة السر غير صحيح *</div> : ""}
                    <div class="form-content">
                        <div class="row">
                            <div class="row-md-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="البريد الالكتروني *" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="كلمة السر *" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btnSubmit" onClick={() => { log(email, password) }}>تسجيل</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
