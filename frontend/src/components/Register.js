import React from 'react'

const Register = () => {
    return (
        <div className="cont">
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p>تسجيل حساب جديد في سوبر ماركت البركة</p>
                    </div>

                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="اسمك *"  />
                                </div>
                                <div class="form-group">
                                    <input type="number" class="form-control" placeholder="رقم تلفونك *"  />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="كلمة السر *" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="البريد الالكتروني *" />
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

export default Register
