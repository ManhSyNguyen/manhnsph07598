import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Category = ({ categorys, onRemovect }) => {
    const removeHandleCt = (id) => {
        onRemovect(id)

    }
    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Thêm Danh Mục
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/category/add">Thêm danh mục</Link><hr />

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý danh mục</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên danh mục</th>
                                        <th scope="col">Mô tả</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys.map(({ id, namedm, mota }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{namedm}</td>
                                            <td>{mota}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeHandleCt(id)}>Xóa</button>&nbsp;
                                                {/* <Link className="btn btn-primary" to={`/admin/edit/${id}`}>Sửa</Link>&nbsp; */}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
