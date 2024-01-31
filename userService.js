import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: false,
    headers: {
        Accept: 'application/json'
    }
});

export const UserService = {
   async getAllusers (){
    let response = await apiClient.get("/users")
   }
   
};

