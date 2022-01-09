import axios from "axios";
import qs from "qs";
import querystring from "query-string"
import { LineLoginIdTokenDecoder } from "../../utils/tokenDecoder";
import LoginService from "./LoginService";
class LineLoginService extends LoginService {
    client_id = "1656721614";
    clientSecret = "bec02e7cf2fb625f1cdaef87d54cfb1a";
    response_type = "code";
    state = "12345abc";
    nonce = "09876xyz";
    scope = "profile openid email";
    prompt = "consent";
    max_age = 120;
    bot_prompt = "normal";
    redirect_uri = "http://localhost:3000/";


    getLineLoginIdTokenPayload = async id_Token => {
        try {
            const idTokenPadload = LineLoginIdTokenDecoder(id_Token);
            return idTokenPadload;
        } catch (e) {
            console.log('LineLoginIdToken Decode Error');
            return undefined;
        }
    }

    getLineUserProfile = async payload => {
        const { name, sub } = payload;
        return { LineUsername: name, LineUserID: sub };
    }

    setLineLoginIdTokenPayload = async payload => {

    }

    getAcessToken = async code => {

        const requestURL = "https://api.line.me/oauth2/v2.1/token";

        const requestConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        const requestBody = qs.stringify({
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": this.redirect_uri,
            "client_id": this.client_id,
            "client_secret": this.clientSecret
        });

        try {
            const responseBody = await axios.post(requestURL, requestBody, requestConfig);

            const lineLoginIdToken = responseBody.data.id_token;

            const lineLoginIdTokenPadload = await this.getLineLoginIdTokenPayload(lineLoginIdToken);

            await this.setLineLoginIdTokenPayload(lineLoginIdTokenPadload);

            const lineUserProfile = await this.getLineUserProfile(lineLoginIdTokenPadload);

        } catch (e) {
            console.log('GET LINE ID_TOKEN ERROR');
        }

    }

    getLineLoginAccessToken = async callbackURL => {

        // Get CallbackQueryString
        const CallbackQueryString = querystring.parseUrl(callbackURL);
        const redirect_uri = CallbackQueryString.url;
        const { code, state } = CallbackQueryString.query;

        // Get AccessToken 
        await this.getAcessToken(code);

    }
}
export default new LineLoginService();