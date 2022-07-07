const emailIsMeetRule = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return (email.match(emailRegex) ? true : false);
}

const passwordIsMeetRule = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return (password.match(passwordRegex) ? true : false);
}
export { emailIsMeetRule, passwordIsMeetRule }