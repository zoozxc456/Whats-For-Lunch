import jwtDecode from "jwt-decode";

const tokenDecoder = token => {
    try {
        const decoded = jwtDecode(token);
        return decoded;
    }catch(e){
        console.log('token error');
    }
}

const LineLoginIdTokenDecoder = token=>{
    try{
        const LineLoginIdTokenPadload = jwtDecode(token);
        return LineLoginIdTokenPadload;
    }catch (e){
        console.log('LineLoginIdToken Error');
    }
}

export {tokenDecoder,LineLoginIdTokenDecoder}