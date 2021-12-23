import axios from "axios";

// Login Request
const loginRequest=axios.create({
    // baseURL:"http://localhost:5000/user"
    baseURL:"http://192.168.0.2:5000/user"
});

export const apiLogin = () =>loginRequest.post('/login');
