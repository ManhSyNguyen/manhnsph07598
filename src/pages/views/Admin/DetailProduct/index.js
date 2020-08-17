import React from 'react'
import PropTypes from 'prop-types'

import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    console.log(id)
    return (
        <div>
            <div className="card-header py-3">
                <p className="m-0 font-weight-bold text-primary">Chi tiết sản phẩm</p>
            </div>
            <br />
            <div className="container-fluid" align="center">
                <div className="card text-left" >
                    <div className="row">
                        <div className="card-body">

                            <div className="col-sm-4 col-md-4 col-lg-4 text-center">
                                <img src={product.image} alt="..." width="300px" />
                            </div>
                            <h2 className="card-title"> Name : {product.name} </h2>
                            <h2 className="card-title"> Nội dung ngắn : {product.ndngan} </h2>
                            <h2 className="card-title"> Trạng thái : {product.status ? 'Còn hàng' : 'Hết hàng'} </h2>
                            <h2 className="card-title"> Danh mục : {product.danhmuc} </h2>
                            <h2 className="card-text"> Regular Price: {product.regularprice} vnđ </h2>
                            <h2 className="card-text"> Sale Price: {product.saleprice} vnđ </h2>
                            <h2 className="card-text"> Nội dung chi tiết: {product.desc} </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
