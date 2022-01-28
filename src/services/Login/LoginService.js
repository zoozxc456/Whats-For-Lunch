import jwtDecode from "jwt-decode";

import { apiLogin } from '../../apis/api';
import { responseGoogleLoginFailure, responseGoogleLoginSuccess } from './GoogleLoginService'
class LoginService {

    setTokenData = async (token) => {
        const decoded = jwtDecode(token);
        console.log(decoded)
        const { email, username, role } = decoded;
        // Store 
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
    }

    login = async (loginData) => {
        try {
            const result = await apiLogin(loginData);
            console.log(result)
            const token = result.data.payload.accessToken;
            console.log(token)
            await this.setTokenData(token);
        } catch (exception) {
            console.log(exception);
        } finally {

            return localStorage.length === 4;
        }
    }

    // GoogleLogin
    GoogleLoginSuccess = async (response) => {
        const loginData = responseGoogleLoginSuccess(response);
        await this.login(loginData);
    };
    GoogleLoginFailure = (response) => responseGoogleLoginFailure(response);

    // LineLogin 
    LineLoginSuccess = async (response) => {
        const lineLoginData = {};
        await this.login(lineLoginData);
    }
    LineLoginFailure = response => console.log(response)
}

export default new LoginService();