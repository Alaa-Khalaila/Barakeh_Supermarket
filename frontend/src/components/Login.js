import React from 'react'

const Login = () => {
    return (
        <div className="cont">
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p> الدخول الى حسابك في سوبرماركت البركة</p>
                    </div>

                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="البريد الالكتروني *" />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="كلمة السر *" />
                                </div>

                            </div>
                        </div>
                        <button type="button" class="btnSubmit">تسجيل</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
