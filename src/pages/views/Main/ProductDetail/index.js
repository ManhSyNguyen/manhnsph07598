import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom';
import apiRequest from '../../../../api/productApi';

const ProductDetail = ({ products }) => {
    const id = useParams().id;
    const [product, setProduct] = useState({});
    // const product = products.find(item => item.id === id)
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.get(id);
                setProduct(data)
                console.log(data)
            } catch (error) {
                console.log('Faile to request API', error)
            }
        }
        getProduct()
    }, {})
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
                                <li className="item1"><a href="#">Dance </a>
                                </li>
                                <li className="item2"><a href="#">Basketball </a>
                                </li>
                                <li className="item4"><a href="#">Running</a>
                                </li>
                                <li className="item4"><a href="#">Football</a>
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
                        {/*initiate accordion*/}
                        {/**/}

                        {/**/}
                    </div>
                    <div className="col-md-9 product-price1">
                        <div className="col-md-5 single-top">
                            <img src={product.image} width="300" />
                        </div>
                        <div className="col-md-7 single-top-in simpleCart_shelfItem">
                            <div className="single-para ">
                                <h4><strong>{product.name}</strong></h4>
                                <div className="star-on">
                                    <ul className="star-footer">
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                    </ul>

                                    <div className="clearfix"> </div>
                                </div>
                                <del className="dels">{product.saleprice} vnđ </del><h5 className="item_price">{product.regularprice} vnđ</h5>
                                <p>{product.desc} </p>

                                <ul className="tag-men">
                                    <li><span>TAG</span>
                                        <span className="women1">: Men</span></li>

                                    <span className="women1">{product.status == 'true' ? <p className="women1" style={{ color: '#00BB00' }}>Còn hàng</p> : <p className="women1" style={{ color: 'red' }}>Hết hàng</p>}</span>
                                </ul>
                                <a href="#" className="add-cart item_add">ADD TO CART</a>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        {/**/}


                        <div className="clearfix" />

                    </div>
                </div></div></div>



    )
}

ProductDetail.propTypes = {

}

export default ProductDetail
