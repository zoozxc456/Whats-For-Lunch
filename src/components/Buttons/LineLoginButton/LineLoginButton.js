import { useEffect } from "react"
import querystring from "query-string"
import qs from "qs"
import axios from "axios"
import { LineLoginIdTokenDecoder } from "../../../utils/tokenDecoder"
import LoginService from "../../../services/Login/LoginService"
import LineLoginButtonView from "./LineLoginButton.view"

const LineLogin = ({ onSuccess, onFailure }) => {

    const client_id = "1656721614",
        clientSecret = "bec02e7cf2fb625f1cdaef87d54cfb1a",
        response_type = "code",
        state = "12345abc",
        nonce = "09876xyz",
        scope = "profile openid email",
        prompt = "consent",
        max_age = 120,
        bot_prompt = "normal",
        redirect_uri = "http://localhost:3000/";

    const LineLoginInit = () => {
        // Create Query String
        const queryString = querystring.stringify({
            response_type: response_type,
            client_id: client_id,
            state: state,
            scope: scope,
            nonce: nonce,
            prompt: prompt,
            max_age: max_age,
            bot_prompt: bot_prompt,
            redirect_uri: redirect_uri
        });

        const lineAuthoriseURL = "https://access.line.me/oauth2/v2.1/authorize?" + queryString;

        window.location.href = lineAuthoriseURL;
    }

    const getLineLoginAccessToken = async callbackURL => {

        // Get CallbackQueryString
        const CallbackQueryString = querystring.parseUrl(callbackURL);
        const { code } = CallbackQueryString.query;

        // Get AccessToken 
        await getAcessToken(code);

    }

    const getAcessToken = async code => {

        const requestURL = "https://api.line.me/oauth2/v2.1/token";

        const requestConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        const requestBody = qs.stringify({
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": redirect_uri,
            "client_id": client_id,
            "client_secret": clientSecret
        });

        try {
            const responseBody = await axios.post(requestURL, requestBody, requestConfig);

            const lineLoginIdToken = responseBody.data.id_token;

            const lineLoginIdTokenPadload = await getLineLoginIdTokenPayload(lineLoginIdToken);

            await setLineLoginIdTokenPayload(lineLoginIdTokenPadload);

            const lineUserProfile = await getLineUserProfile(lineLoginIdTokenPadload);

            await loginSystemByLineLogin(lineUserProfile);

        } catch (e) {
            console.log('GET LINE ID_TOKEN ERROR');
        }

    }

    const getLineLoginIdTokenPayload = async id_Token => {
        try {
            const idTokenPadload = LineLoginIdTokenDecoder(id_Token);
            return idTokenPadload;
        } catch (e) {
            console.log('LineLoginIdToken Decode Error');
            return undefined;
        }
    }

    const getLineUserProfile = async payload => {
        const { name, sub } = payload;
        return { LineUsername: name, LineUserID: sub };
    }

    const setLineLoginIdTokenPayload = async payload => {

    }

    const loginSystemByLineLogin = async ({ LineUsername, LineUserID }) => {

        const requestBody = {
            "loginType": "line",
            "lineUsername": LineUsername,
            "lineUserID": LineUserID
        }

        try {
            console.log(requestBody)

            await LoginService.login(requestBody);
            // const result = await axios.post("http://localhost:5000/user/login",requestBody,{headers:{"Content-Type":"application/json"}});

            // console.log(result);



            // await LoginService.login(requestBody);
        } catch (e) {
            console.log("System Login Error");
        }

    }

    useEffect(() => {
        const callbackURL = window.location.href;
        const queryString = querystring.parseUrl(callbackURL);

        if (Object.keys(queryString.query).length !== 0) {
            getLineLoginAccessToken(callbackURL);
        }
    }, [client_id]);


    return (
        <LineLoginButtonView onClickHandler={LineLoginInit} />
    )
}





export default LineLogin;