/* Import React Hooks */
import { useRef, useState } from "react";

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

/* Import Components */
import ForgetPwdStep1 from './ForgetPwdStep1';
import ForgetPwdStep2 from './ForgetPwdStep2';
import ForgetPwdStep3 from './ForgetPwdStep3';
import ForgetPwdStep4 from './ForgetPwdStep4';

const ForgetPassword = () => {
    const [forgetPwdStep, setForgetPwdStep] = useState(1);

    const showNextStepComponent = () => setForgetPwdStep(forgetPwdStep + 1);
    let userEmail = useRef("");
    const setUserEmail = (email) => {
        userEmail.current = email
        console.log(userEmail.current, email)
    }
    const getUserEmail = () => {
        console.log(userEmail.current)
        return userEmail.current
    }
    const getStepComponent = () => {
        switch (forgetPwdStep) {
            case 1:
                return <ForgetPwdStep1 showNextStepComponent={showNextStepComponent} setUserEmail={setUserEmail} />
            case 2:
                return <ForgetPwdStep2 showNextStepComponent={showNextStepComponent} />
            case 3:
                return <ForgetPwdStep3 showNextStepComponent={showNextStepComponent} getUserEmail={getUserEmail}/>
            case 4:
                return <ForgetPwdStep4 showNextStepComponent={showNextStepComponent} />
            default:
                window.location.href = "/";
        }
    }

    const stepComponent = getStepComponent();

    return stepComponent;
}

export default ForgetPassword;