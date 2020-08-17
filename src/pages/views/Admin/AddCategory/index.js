import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddCategory = ({ onAddCt }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        const newdata = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
        };
        onAddCt(newdata);
        history.push("/admin/categorys");
    };

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm danh mục</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlfor="InputCategoryName">Tên danh muc</label><span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control" id="categoryName" name="name"
                                ref={register({ required: true, minLength: 3, pattern: /^[A-Z a-z0-9]*$/ })} />
                            {errors.name && errors.name.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength" && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern" && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlfor="InputCategoryName">Mô tả</label><span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control" id="categoryName" name="mota"
                                ref={register({ required: true, minLength: 3, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.mota && errors.mota.type === "required" && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.mota && errors.mota.type === "minLength" && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.mota && errors.mota.type === "pattern" && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddCategory.propTypes = {

}

export default AddCategory
