import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products, categorys }) => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Dashboard</h6>

                </div><br />

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <h2><strong style={{ color: "#049249" }}>Product :</strong></h2>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">Số lượng : {products.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <h2><strong style={{ color: "#049249" }}>Category :</strong></h2>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">Số lượng : {categorys.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>

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
