import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export const Userservice = {

async getAllUsers (){
    let response = await apiClient.get()
    let allUsers = response.data
    return allUsers
}

    let response = 
}