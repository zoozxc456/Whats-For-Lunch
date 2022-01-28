import { apiRegister } from "../../apis/api"

class RegisterService {

    register = async reqBody => {
        try {
            const registerResult = await apiRegister(reqBody);
            console.log(registerResult);
            return registerResult.data.payload;
        } catch (exception) {
            console.log(exception.response)
        }
    }

}

export default new RegisterService();