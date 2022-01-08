import axios from "axios"
import querystring from "query-string"
import qs from "qs"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { LineLoginIdTokenDecoder } from "../../utils/tokenDecoder"


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

    const getLineLoginAccessToken = async callbackURL => {

        // Get CallbackQueryString
        const CallbackQueryString = querystring.parseUrl(callbackURL);
        const redirect_uri = CallbackQueryString.url;
        const { code, state } = CallbackQueryString.query;

        // Get AccessToken 

        const getAccessTokenReqConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        const getAccessTokenReqBody = qs.stringify({
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": redirect_uri,
            "client_id": clientID,
            "client_secret": clientSecret
        });

        try {
            const getAccessTokenResPayload = await axios.post('https://api.line.me/oauth2/v2.1/token',
                getAccessTokenReqBody,
                getAccessTokenReqConfig);

            const LineLoginIdToken = getAccessTokenResPayload.id_token;
            const LineLoginIdTokenPadload = LineLoginIdTokenDecoder(LineLoginIdToken);
            const { name, sub } = LineLoginIdTokenPadload;

            // POST BackEnd
        } catch (e) {

        }


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
                const { id_token } = res.data;
                try {
                    const LineLoginIdTokenPadload = LineLoginIdTokenDecoder(id_token);
                    return LineLoginIdTokenPadload;
                } catch (e) {
                    console.log('token error')
                }
            }).then((LineLoginIdTokenPadload) => {
                if (LineLoginIdTokenPadload) {

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