import jwtDecode from "jwt-decode";

import { apiLogin } from '../../apis/api';

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

    responseGoogleLoginSuccess = (response) => {
        const googleProfileData = { ...response.profileObj };
        const loginData = {
            "loginType": "google",
            ...googleProfileData
        }
        console.log(loginData);
        // const {}
    }

    responseGoogleLoginFailure = (error) => {
        console.log(error);
    }

    login = async (loginData) => {
        try {
            const result = await apiLogin(loginData);
            const token = result.data.data.token;
            this.setTokenData(token);
        } catch (exception) {
            console.log(exception);
        }

    }

}

export default new LoginService();