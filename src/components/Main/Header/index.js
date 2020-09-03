import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (

        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="search">
                        <form>
                            <input type="text" />
                            <input type="submit" value="Tìm kiếm" />
                        </form>
                    </div>
                    <div className="header-left">
                        <ul>
                            <li><a className="lock" href="#">Login</a></li>
                            <li><a className="lock" href="#">Register</a></li>
                            <li>
                            </li>
                        </ul>
                        <div className="cart box_1">
                            <a href="#">
                                <h3> <div className="total">
                                    <span className="simpleCart_total" /> (<span id="simpleCart_quantity" className="simpleCart_quantity" /> items)</div>
                                    <img src="images/cart.png" alt="" /></h3>
                            </a>
                            <p><a href="#" className="simpleCart_empty">Empty Cart</a></p>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="container">
                <div className="head-top">
                    <div className="logo">
                        <Link to="/"><img src="images/logo.jpg" alt="" /></Link>
                    </div>
                    <div className=" h_menu4">
                        <ul className="memenu skyblue">
                            <li className="active grid"><Link className="color8" to="/">TRANG CHỦ</Link></li>

                            <li><Link className="color4" to="/about">SẢN PHẨM</Link></li>
                            <li><Link className="color1" to="/gioithieu">GIỚI THIỆU</Link></li>
                            <li><Link className="color6" to="/lienhe">LIÊN HỆ</Link></li>
                            <li><Link className="color6" to="/baiviet">BÀI VIẾT</Link></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
