import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    return (
        <div>
            <div className="clearfix"> </div>
            <div className="contact">
                <div className="container">
                    <h1>Liên hệ</h1>
                    <div className="contact-form">
                        <div className="col-md-8 contact-grid">
                            <form>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <textarea cols={77} rows={6} value=" " />
                                <button className="btn btn-secondary">Send</button>
                            </form>
                        </div>
                        <div className="col-md-4 contact-in">
                            <div className="address-more">
                                <h4>Địa chỉ </h4>
                                <p>Ngõ 59, Lê Đức Thọ,</p>
                                <p>Phường Mai Dịch,</p>
                                <p>Q.Nam từ Liêm - Hà Nội. </p>
                            </div>
                            <div className="address-more">
                                <h4>Address1</h4>
                                <p>Tel:1115550001</p>
                                <p>Fax:12 34 995 0792</p>
                                <p>Email:<a href="#"> bossbee127@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="map">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.053935934952!2d105.76795211493271!3d21.030527785997442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ba7a0fb9f3%3A0xc58f92ccd2fbb20a!2zTmfDtSA1OSDEkMaw4budbmcgTMOqIMSQ4bupYyBUaOG7jSwgTeG7uSDEkMOsbmggMiwgTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1596425473573!5m2!1svi!2s" width="640" height="480" />
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact
