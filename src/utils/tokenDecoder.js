import jwtDecode from "jwt-decode";

const tokenDecoder = token => {
    try {
        const decodedPayload = jwtDecode(token);
        return decodedPayload;
    }catch(e){
        return null;
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