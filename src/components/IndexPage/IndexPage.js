import { useState } from 'react';
/* Import Images */
import banner from '../../assets/images/banner.png'
import LineLogin from './LineLoginButton'
const style = {
    width: "100vw"
}

const IndexPageComponent = () => {
    const [payload, setPayload] = useState(null);
    const [idToken, setIdToken] = useState(null);

    // LINE LOGIN CONFIG
    const clientID = "1656721614",
        clientSecret="bec02e7cf2fb625f1cdaef87d54cfb1a",
        state="12345abc",
        nonce="09876xyz",
        redirectURI="http://localhost:3000/",
        scope="profile openid email";

    return (
        <>
            <LineLogin
                clientID={clientID}
                clientSecret={clientSecret}
                state={state}
                nonce={nonce}
                redirectURI={redirectURI}
                scope={scope}
                setPayload={setPayload}
                setIdToken={setIdToken}
            />
            <img src={banner} alt={'banner'} style={style} />
        </>
    )
}

export default IndexPageComponent;
