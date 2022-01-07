import axios from "axios"
import querystring from "query-string"
import qs from "qs"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
// import tokenDecoder from "../../utils/tokenDecoder"
import jwtDecode from "jwt-decode"
const style = {
    background: "#00FF00"
}

const clickHandler = () => {
    const url = ''
    axios.post(url, {})
}

const LineLogin = ({
    clientID,
    clientSecret,
    state,
    nonce,
    scope,
    setPayload,
    setIdToken,
    redirectURI
}) => {
    const LineLoginInit = () => {
        // Build Query String
        const queryString = querystring.stringify({
            response_type: 'code',
            client_id: clientID,
            state: state,
            scope: scope,
            nonce: nonce,
            prompt: 'consent',
            max_age: 120,
            bot_prompt: 'normal',
            redirect_uri: redirectURI
        });

        const lineAuthoriseURL = "https://access.line.me/oauth2/v2.1/authorize?" + queryString;

        window.location.href = lineAuthoriseURL;
    }

    const getAccessToken = callbackURL => {

        const queryString = querystring.parseUrl(callbackURL);
        const redirect_uri = queryString.url;
        const { code, state } = queryString.query;

        const reqConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        const reqBody = qs.stringify({
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": redirect_uri,
            "client_id": clientID,
            "client_secret": clientSecret
        });

        axios.post('https://api.line.me/oauth2/v2.1/token', reqBody, reqConfig)
            .then((res) => {
                console.log(res)
                const { id_token } = res.data;
                try {
                    const result = jwtDecode(id_token);
                    console.log(result);
                } catch (e) {
                    console.log('token error')
                }
            }).catch((err) => console.log(err.response))
    }

    useEffect(() => {
        const callbackURL = window.location.href;
        const queryString = querystring.parseUrl(callbackURL);

        if (Object.keys(queryString.query).length !== 0) {
            getAccessToken(callbackURL);
        }
    }, [clientID]);


    return (
        <Button style={style} onClick={LineLoginInit}>
            Line
        </Button>
    )
}

export default LineLogin;