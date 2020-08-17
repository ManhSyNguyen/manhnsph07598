import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="content-top">
                        <h1><img src="images/giohang.png" width="40px" /> NEW PRODUCTS</h1>
                        <div className="grid-in">
                            {products.map((item, index) => (

                                <div className="col-md-4 grid-top">
                                    <Link to={`/product/${item.id}`} className="b-link-stripe b-animate-go  thickbox">
                                        <img className="img-responsive" src={item.image} />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-left    b-delay03 ">
                                                <span>{item.name}</span>
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="clearfix"> </div>
                    <div className="content-top-bottom">
                        <br />
                        <div className="col-md-6 men">
                            <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b1.jpg" alt="" />
                                <div className="b-wrapper">
                                    <h3 className="b-animate b-from-top top-in   b-delay03 ">
                                        <span>NĂNG ĐỘNG</span>
                                    </h3>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="col-md1 ">
                                <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b2.jpg" alt="" />
                                    <div className="b-wrapper">
                                        <h3 className="b-animate b-from-top top-in1   b-delay03 ">
                                            <span>MẠNH MẼ</span>
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md2">
                                <div className="col-md-6 men1">
                                    <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b3.jpg" alt="" />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-top top-in2   b-delay03 ">
                                                <span>NGHỆ SĨ</span>
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-6 men2">
                                    <a href="#" className="b-link-stripe b-animate-go  thickbox"><img className="img-responsive" src="images/b4.jpg" alt="" />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-top top-in2   b-delay03 ">
                                                <span>TRẺ TRUNG</span>
                                            </h3>
                                        </div>
                                    </a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>

                <div className="content-bottom">
                    <ul>
                        <li><a href="#"><img className="img-responsive" src="images/lo.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo1.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo2.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo3.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo4.png" alt="" /></a></li>
                        <li><a href="#"><img className="img-responsive" src="images/lo5.png" alt="" /></a></li>
                        <div className="clearfix"> </div>
                    </ul>
                </div>


            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home
