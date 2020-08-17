import React from 'react'
import PropTypes from 'prop-types'

const Introduce = props => {
    return (
        <div>
            <br />

            <div className="container">
                <div className="card text-center" >
                    <div className="row">
                        <div className="card-body">
                            <div className="cap">
                                <div className="contact">
                                    <h1 >Giới thiệu</h1><hr /></div>
                                <p className=" text-justify">Nike là nhà cung cấp toàn cầu về giày, quần áo và dụng cụ thể thao số một thế giới.
                                Được thành lập vào ngày 25 tháng 1 năm 1964 với tên Blue Ribbon Sports bởi Bill Bowerman
                                và Phil Knight, sau đó chính thức có tên gọi là Nike vào ngày 30 tháng 5 năm 1971.
                                Bên cạnh đó, Nike đã thiết lập một danh mục thương hiệu mạnh mẽ với một số công ty con
                                bao gồm Cole Haan, Converse Inc., Hurley International LLC, NIKE Golf và Umbro Ltd.
                                Hiện nay, Nike hoạt động tại hơn 160 quốc gia trên toàn cầuvới hơn 30.000 nhân viên của
                                Nike trên khắp sáu châu lục, mỗi người trong số họ đóng góp sức lực của mình để hoàn thành
                                sứ mệnh của nhãn hiệu:mang lại cảm hứng và sự đổi mới cho mọi vận động viên trên
            thế giới</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="container" >
                <div className="card text-center" >
                    <div className="row">
                        <div className="card-body">
                            <div className="contact">
                                <h1 className="big-tt animated fadeInDown">Tinh thần thương hiệu</h1></div><hr />
                            <ul >
                                <li>
                                    <div className="img">
                                        <img src="images/Taobao.jpg" width='500' />
                                    </div>
                                    <div className="copy">
                                        <h3><strong>Táo bạo</strong> </h3>

                                    </div>
                                </li><br />
                                <li>
                                    <div className="img" >
                                        <img src="images/docdao.jpg" width='500' />
                                    </div>
                                    <div className="copy">
                                        <h3><strong>Độc đáo</strong></h3>

                                    </div>
                                </li><br />
                                <li>
                                    <div className="img">
                                        <img src="images/sangtao.jpg" width='500' />
                                    </div>
                                    <div className="copy">
                                        <h3><strong>Sáng tạo</strong></h3>

                                    </div>
                                </li><br />
                                <li>
                                    <div className="img" >
                                        <img src="images/dandau.jpg" width='500' />
                                    </div>
                                    <div className="copy">
                                        <h3><strong>Dẫn đầu</strong></h3>

                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <br />
            </div>
        </div >

    )
}

Introduce.propTypes = {

}

export default Introduce
