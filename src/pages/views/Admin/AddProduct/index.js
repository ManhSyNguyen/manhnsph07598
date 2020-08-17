import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react'
import firebase from '../../../../firebase'
const AddProduct = ({ onAdd, categorys }) => {
    const { register, handleSubmit, errors } = useForm();
    const [desc, setDesc] = useState("");

    let history = useHistory();


    // const [valueInput, setValueInput] = useState({});
    // const onHandlechane = (e) => {
    //     const { name, value } = e.target;
    //     setValueInput({
    //         //tuong trung cho name, image, price
    //         ...valueInput,
    //         [name]: value
    // });

    // }
    const onHandleAdd = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                console.log(data);
                //     e.preventDefault();
                onAdd(newData)
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                history.push("/admin/products");
            })
        });
    }
    const handleEditorChange = (content, editor) => {
        setDesc(content);
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleAdd)}>
                        <div className="form-group">
                            <label htmlfor="InputProductName">Tên sản phẩm</label><span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control" id="productName" name="name"
                                ref={register({ required: true, minLength: 5, pattern: /^[A-Z a-z0-9]*$/ })} />
                            {errors.name && errors.name.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength" && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern" && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div>
                            <label htmlFor="InputProductName">Nội dung ngắn</label><span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control" id="productNdNgan" name="ndngan"
                                ref={register({ required: true, minLength: 5, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.ndngan && errors.ndngan.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ndngan && errors.ndngan.type === "minLength" && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ndngan && errors.ndngan.type === "pattern" && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label><span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control" name="status" ref={register({ required: true })} >
                                <option></option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.status && errors.status.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <div className="control">
                            <select
                                name="categoryId"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Không thuộc danh mục nào--</option>
                                {categorys.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.namedm}
                                    </option>
                                ))}
                            </select>
                        </div>


                        {/* <div className="form-group">
                            <label htmlFor="InputProductImage">Ảnh</label><span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control" id="productImage" name="image"
                                ref={register({ required: true, pattern: /\.(gif|jpe?g|tiff|png|webp|bmp)$/i })} />
                            {errors.image && errors.image.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.image && errors.image.type === "pattern" && <span style={{ color: "red" }}>Không đúng định dạng ảnh</span>}
                        </div> */}

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
                            <label htmlFor="InputProductPrice">Giá nhập</label><span style={{ color: 'red' }}>*</span>
                            <input type="number" className="form-control" id="productRegularPrice" name="regularprice"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })} />
                            {errors.regularprice && errors.regularprice.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.regularprice && errors.regularprice.type === "min" && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá bán</label><span style={{ color: 'red' }}>*</span>
                            <input type="number" className="form-control" id="productSalePrice" name="saleprice"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })} />
                            {errors.saleprice && errors.saleprice.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.saleprice && errors.saleprice.type === "min" && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="productDescription">Mô tả chi tiết sản phẩm</label>
                            <Editor
                                init={{
                                    height: 500,
                                    images_upload_url: 'postAcceptor.php',
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount'
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                                }}
                                onEditorChange={handleEditorChange}
                                name="desc"

                            />

                        </div>

                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct
