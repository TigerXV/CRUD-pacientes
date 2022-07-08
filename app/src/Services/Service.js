
import http from '../Services/http-common';

const getAll = ()=>{
    return http.get("/paciente")
};
const get = id =>{
    return http.get(`/paciente/${id}`)
}
const create = data =>{
    return http.post("/paciente", data)
}


