import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
const requestHeader = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
}

// Login Request
const loginRequest = axios.create({
    baseURL:`${process.env.REACT_APP_LOCAL_API_DOMAIN}/user`,
    headers: requestHeader
});

// Register Request
const registerRequest = axios.create({
    baseURL: "http://localhost:5000/user/",
    headers: requestHeader
})

export const apiLogin = loginData => loginRequest.post('/login', loginData);
export const apiRegister = registeReqBody =>registerRequest.post('/register',registeReqBody);
