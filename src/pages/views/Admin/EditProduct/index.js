import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiRequest from '../../../../api/productApi'
import firebase from '../../../../firebase'
const EditProduct = ({ onUpdate, categorys }) => {
    let { id } = useParams();
    let history = useHistory();
    const [editProduct, setEditProduct] = useState({});

    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await apiRequest.get(id);
                setEditProduct(data);
            } catch (error) {

            }
        };
        getProduct()
    }, [])
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id,
                    ...data,
                    image: url
                }
                //     e.preventDefault();
                onUpdate(newData);
                console.log(newData)
                history.push("/admin/products");
            })
        });
    }


    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Cập nhập sản phẩm</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)} >
                        <div className="form-group">
                            <label htmlFor="InputProductName">Tên sản phẩm</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text"
                                className="form-control"
                                id="InputProductName"
                                defaultValue={editProduct.name}
                                name="name"
                                ref={register({ required: true, pattern: /^[A-Z a-z0-9]*$/ })} />
                            {errors.name && errors.name.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div>
                            <label htmlFor="InputProductName">Nội dung ngắn</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                defaultValue={editProduct.ndngan} id="InputProductName" name="ndngan"
                                ref={register({ required: true, minLength: 5, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.ndngan && errors.ndngan.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ndngan && errors.ndngan.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ndngan && errors.ndngan.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                defaultValue={editProduct.status} >
                                <option value="">----Không thuộc mục nào----</option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <div className="control">
                            <select
                                name="categoryId"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                                defaultValue={editProduct.categoryId}
                            >
                                <option value="">--Không thuộc danh mục nào--</option>
                                {categorys.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.namedm}
                                    </option>
                                ))}
                            </select>
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
                            <label htmlFor="InputProductPrice">Giá nhập</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="regularprice"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                                defaultValue={editProduct.regularprice} />
                            {errors.regularprice && errors.regularprice.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.regularprice && errors.regularprice.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá bán</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="saleprice"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                                defaultValue={editProduct.saleprice} />
                            {errors.saleprice && errors.saleprice.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.saleprice && errors.saleprice.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <button className="btn btn-primary">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
