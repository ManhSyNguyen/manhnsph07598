import React from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

const About = ({ products, categorys }) => {
    return (
        <div>
            <div className="product">
                <div className="container">
                    <div className="col-md-3 product-price">
                        <div className=" rsidebar span_1_of_left">
                            <div className="of-left">
                                <h3 className="cate">Categories</h3>
                            </div>
                            <ul className="menu">
                                <li className="item1">
                                    <h5 className="card-title">
                                        <Link to={"/about"}>All</Link>
                                    </h5>
                                    {categorys.map(({ id, namedm }) => (
                                        <div className="size__list color__list">
                                            <h5 className="card-title">
                                                <Link to={"/cate/" + id}>{namedm}</Link>
                                            </h5>

                                        </div>
                                    ))}

                                </li>

                            </ul>
                        </div>
                        {/*initiate accordion*/}
                        {/**/}
                        <div className="product-middle">
                            <div className="fit-top">
                                <h6 className="shop-top">New products</h6>
                                <Link to="/" className="shop-now">SHOP NOW</Link>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="sellers">
                            <div className="of-left-in">
                                <h3 className="tag">Tags</h3>
                            </div>
                            <div className="tags">
                                <ul>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <div className="clearfix"> </div>
                                </ul>
                            </div>
                        </div>
                        {/**/}
                        <div className="product-bottom">
                            <div className="of-left-in">
                                <h3 className="best">Best Sellers</h3>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk1.jpg" alt="" /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h2 className="best2"><a href="#">Nike Sportswear</a></h2>
                                    <span className=" price-in1"> 919.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk2.jpg" alt="" /></a>
                                </div>
                                <div className="fashion-grid1">
                                    <h2 className="best2"><a href="#">LGiannis Nike Dri-FIT </a></h2>
                                    <span className=" price-in1"> 819.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className=" per1">
                            <a href="#"><img className="img-responsive" src="images/gy1.jpg" alt="" />
                                <div className="six1">
                                    <h4>DISCOUNT</h4>
                                    <p>Up to</p>
                                    <span>60%</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-9 product1">
                        <div className=" bottom-product">


                            {products.map((sh, index) => (
                                <div className="col-md-4 bottom-cd simpleCart_shelfItem">
                                    <div className="product-at ">
                                        <Link to={`/product/${sh.id}`}><img className="img-responsive" src={sh.image} alt="" />
                                            <div className="pro-grid">
                                                <span className="buy-in">Buy Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <p className="tun">{sh.name}</p>
                                    <a href="#" className="item_add">
                                        <p className="number item_price"><i> </i>{sh.regularprice} vnđ</p>
                                    </a>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

About.propTypes = {

}

export default About
