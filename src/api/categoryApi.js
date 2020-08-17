import http from "./axiosHttp";

const getAll = () => {
    return http.get("/categorys");
};

const get = id => {
    return http.get(`/categorys/${id}`);
};

const create = data => {
    return http.post("/categorys", data);
};

const update = (id, data) => {
    return http.put(`/categorys/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/categorys/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};