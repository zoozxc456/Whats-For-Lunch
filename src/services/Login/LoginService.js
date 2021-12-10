import jwtDecode from "jwt-decode";

import { apiLogin } from '../../apis/api';

class LoginService {
    constructor(){
        LoginService.bind(this.setTokenData)
    }
    async login(loginData) {
        try {
            const result = await apiLogin(loginData);
            console.log(result.data.data.token)
            const token = result.data.data.token;
            this.setTokenData(token)
        } catch (exception) {
            console.log(exception);
        }

    }

    setTokenData(token) {
        const decoded = jwtDecode(token);
        const { account, username, role } = decoded;
        // Store 
        localStorage.setItem("token", token);
        localStorage.setItem("account", account);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
    }
}

const Login = async(loginData)=>{
    try {
        const result = await apiLogin(loginData);
        console.log(result.data.data.token)
        const token = result.data.data.token;
        setTokenData(token)
    } catch (exception) {
        console.log(exception);
    }
}

const setTokenData =(token)=>{
    const decoded = jwtDecode(token);
    console.log(decoded)
    const { Account, Username, Role } = decoded.payload;
    // Store 
    localStorage.setItem("token", token);
    localStorage.setItem("account", Account);
    localStorage.setItem("username", Username);
    localStorage.setItem("role", Role);
}






export default Login;