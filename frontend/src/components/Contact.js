import React from 'react'

const Contact = () => {
    return (
        <div className="cont1">
            <div class="container contact-form">
                <div class="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form method="post">
                    <h3>ارسل لنا رسالة</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" name="txtName" class="form-control" placeholder="اسمك *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="txtEmail" class="form-control" placeholder="بريدك الالكتروني *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="txtPhone" class="form-control" placeholder="رقم تلفونك *" value="" />
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <textarea name="txtMsg" class="form-control" placeholder="رسالتك *" style={{ width: "100%", height: " 150px" }}></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="btnSubmit" class="btnContact" value="ارسل" style={{marginLeft:"50%"}} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact
