import jwtDecode from "jwt-decode";

import { apiLogin } from '../../apis/api';

class LoginService {

    setTokenData = (token) => {
        const decoded = jwtDecode(token);
        const { account, username, role } = decoded;
        // Store 
        localStorage.setItem("token", token);
        localStorage.setItem("account", account);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
    }

    login = async (loginData) => {
        try {
            const result = await apiLogin(loginData);
            console.log(result.data.data.token)
            const token = result.data.data.token;
            this.setTokenData(token);
        } catch (exception) {
            console.log(exception);
        }

    }

}

export default new LoginService();