const GoogleClientID="705353102436-2ske0a0p7pgjh71ms5nadjdgn6mi8h2p.apps.googleusercontent.com";

const responseGoogleLoginSuccess = (response) => {
    const googleProfileData = { ...response.profileObj };
    const loginData = {
        "loginType": "google",
        ...googleProfileData
    }
    return loginData;
}

const responseGoogleLoginFailure = (error) => {
    console.log(error);
}

export { GoogleClientID,responseGoogleLoginSuccess, responseGoogleLoginFailure }