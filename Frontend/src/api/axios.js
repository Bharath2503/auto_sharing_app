import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" })

export const newslot = async (data) => {
    try {
        console.log(data)
        const res = await api.post('/newslot', data);
        console.log(res.data.message)
        return res.data.message === 'Success' ? true : false
    } catch (e) {
        console.log(e)
        alert(e.response.data.message)
        return false
    }   
}
export const allslots = async () => {
    try {
        const res = await api.get('/slots')
        console.log(res.data)
        return res.data
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
};
export const viewslot = async (data) => {
    try {
        console.log(data)
        const res = await api.get(`/viewslot/${data}`);
        console.log(res.data)
        return res.data
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
};
export const deleteslot = async (data) => {
    try {
        console.log(data)
        const res = await api.get(`/deleteslot/${data}`);
        console.log(res.data)
        return res.data.message == 'Success' ? true : false
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
};
export const joinslot = async (id, data) => {
    try {
        console.log(data)
        const res = await api.post(`/join/${id}`, data);
        console.log(res.data)
        return res.data.message == 'Joined' ? true : false
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
};
export const leave = async (id, data) => {
    try {
        console.log(data)
        const res = await api.post(`/leave/${id}`, data);
        console.log(res.data)
        return res.data.message == 'Success' ? true : false
    } catch (e) {
        alert(e.response.data.message)
        return false
    }

};

//user
export const signup = async (data) => {
    try {
        const res = await api.post('/user/signup', data)
        localStorage.setItem("user", JSON.stringify(res.data.result));
        localStorage.setItem("usertoken", res.data.token);
        console.log(res)
        return true
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
};
export const login = async (data) => {
    try {
        const res = await api.post('/user/login', data);
        localStorage.setItem("user", JSON.stringify(res.data.result));
        localStorage.setItem("usertoken", res.data.token);
        console.log(res)
        return true
    } catch (e) {
        alert(e.response.data.message)
        return false
    }
}