import axios from "axios";
const api= axios.create({baseURL:"http://localhost:4000/"})

export const newslot=(data)=>api.post('/newslot',data);
export const allslots=()=>api.get('/slots');
export const viewslot=(data)=>api.get(`/viewslot/${data._id}`);
export const deleteslot=(data)=>api.get(`/deleteslot/${data._id}`);
export const joinslot=(data,id)=>api.post(`/join/${id}`,data);
