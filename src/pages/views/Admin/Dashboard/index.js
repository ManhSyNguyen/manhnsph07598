import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products, categorys, posts }) => {

    return (
        <div>


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Dashboard</h6>

                </div><br />
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-warning card-header-icon">
                                        <p className="card-category">PRODUCT </p>
                                        <h3 className="card-title">Số Lượng : {products.length}
                                        </h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-success card-header-icon">
                                        <p className="card-category">CATEGORYS</p>
                                        <h3 className="card-title">Số lượng : {categorys.length}</h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="card card-stats">
                                    <div className="card-header card-header-danger card-header-icon">

                                        <p className="card-category">POST</p>
                                        <h3 className="card-title">Số lượng : {posts.length}</h3>
                                    </div>
                                    <div className="card-footer">

                                    </div>

                                </div>
                                <br />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
