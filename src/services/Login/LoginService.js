import jwtDecode from "jwt-decode";

import { apiLogin } from '../../apis/api';
import { responseGoogleLoginFailure, responseGoogleLoginSuccess } from './GoogleLoginService'
class LoginService {

    setTokenData = (token) => {
        const decoded = jwtDecode(token);
        const { Account, Username, Role } = decoded.payload;
        // Store 
        localStorage.setItem("token", token);
        localStorage.setItem("account", Account);
        localStorage.setItem("username", Username);
        localStorage.setItem("role", Role);
    }

    login = async (loginData) => {
        try {
            const result = await apiLogin(loginData);
            const token = result.data.data.token;
            this.setTokenData(token);
        } catch (exception) {
            console.log(exception);
        }finally{
            console.log(localStorage.length);
        }
    }

    // GoogleLogin
    GoogleLoginSuccess = async(response) => {
        const loginData = responseGoogleLoginSuccess(response);
        await this.login(loginData);
    };
    GoogleLoginFailure = (response) => responseGoogleLoginFailure(response);

    // LineLogin 
    LineLoginSuccess = async(response)=>{
        const lineLoginData={};
        await this.login(lineLoginData);
    }
    LineLoginFailure = response =>console.log(response)
}

export default new LoginService();