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

export { responseGoogleLoginSuccess, responseGoogleLoginFailure }