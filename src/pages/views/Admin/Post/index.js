import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ posts, onRemove }) => {
    // const removeHandlePost = (id) => {
    //     onRemove(id)

    // }
    return (
        <div>
            <div>
                <div className="mb4-4 d-flex justify-content-between align-items-center">
                    <h1 className="h3 text-gray-800">
                        Thêm bài viết
                </h1><br />

                </div>
                {/* <Link className="btn btn-danger" to="/admin/product/add">Danh mục</Link><hr /> */}

                <div>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Quản lý bài viết</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Tiêu đề</th>
                                            <th scope="col">Nội dung</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map(({ id, name, noidung }, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{name}</td>
                                                <td>{noidung}</td>
                                                <td>
                                                    <button className="btn btn-danger">Xóa</button>
                                                    {/* <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>&nbsp;
                                                <Link className="btn btn-primary" to={`/admin/edit/${id}`}>Sửa</Link>&nbsp;
                                                <Link className="btn btn-dark" to={`/admin/detail/${id}`}>Chi tiết</Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

Post.propTypes = {

}

export default Post
