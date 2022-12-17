import axios from "axios";

const api= axios.create({baseURL:"http://localhost:4000"})

export const newslot=(data)=>api.post('/newslot',data);
export const allslots=async ()=>{
    const res= await api.get('/slots')
    console.log(res.data)
    return res.data
};
export const viewslot=async (data)=>{
    console.log(data)
    const res= await api.get(`/viewslot/${data}`);
    console.log(res.data)
    return res.data
};
export const deleteslot=(data)=>api.get(`/deleteslot/${data._id}`);
export const joinslot=(data,id)=>api.post(`/join/${id}`,data);

//user
export const signup=async(data)=>{
    try{
        const res=await api.post('/user/signup',data)
        localStorage.setItem("user", JSON.stringify(res.data.result));
        localStorage.setItem("usertoken", res.data.token);
        console.log(res)
        return true
    }catch(e){
        alert(e.response.data.message)
        return false
    }
};
export const loginup=(data)=>api.post('/user/login',data);