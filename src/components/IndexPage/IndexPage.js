import { useState } from 'react';
/* Import Images */
import banner from '../../assets/images/banner.png'
import LineLogin from './LineLoginButton'
import LoginService from '../../services/Login/LoginService';
const style = {
    width: "100vw"
}

const IndexPageComponent = () => {
    const [payload, setPayload] = useState(null);
    const [idToken, setIdToken] = useState(null);

    return (
        <>
            {/* <LineLogin
                clientID={clientID}
                clientSecret={clientSecret}
                state={state}
                nonce={nonce}
                redirectURI={redirectURI}
                scope={scope}
                setPayload={setPayload}
                setIdToken={setIdToken}
            /> */}
            <LineLogin
                onSuccess={LoginService.LineLoginSuccess}
                onFailure={LoginService.LineLoginFailure}
            />
            <img src={banner} alt={'banner'} style={style} />
        </>
    )
}

export default IndexPageComponent;
