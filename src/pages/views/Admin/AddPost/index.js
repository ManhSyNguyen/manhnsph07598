import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from '../../../../firebase'
const AddPost = ({ onAddP }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`imagesPost/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newdata = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    image: url
                };
                onAddP(newdata);
                history.push("/admin/posts");
            })
        });
    };
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm bài viết</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tiêu đề</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="name"
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.name && errors.name.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        name="image"
                                        ref={register}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Nội dung</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="noidung"
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.noidung && errors.noidung.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.noidung && errors.noidung.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.noidung && errors.noidung.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
