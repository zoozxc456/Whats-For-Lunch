import jwtDecode from "jwt-decode";

const tokenDecoder = token => {
    try {
        const decoded = jwtDecode(token);
        return decoded.payload;
    }catch(e){
        console.log('token error');
    }
}

export default tokenDecoder