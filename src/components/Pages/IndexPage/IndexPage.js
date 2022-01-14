import { useState } from 'react';
/* Import Images */
import banner from '../../Assets/images/banner.png'
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
            <img src={banner} alt={'banner'} style={style} loading="lazy"/>
        </>
    )
}

export default IndexPageComponent;
