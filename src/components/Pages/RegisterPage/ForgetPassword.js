/* Import React Hooks */
import { useState } from "react";

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

    const getStepComponent = () => {
        switch (forgetPwdStep) {
            case 1:
                return <ForgetPwdStep1 showNextStepComponent={showNextStepComponent} />
            case 2:
                return <ForgetPwdStep2 showNextStepComponent={showNextStepComponent} />
            case 3:
                return <ForgetPwdStep3 showNextStepComponent={showNextStepComponent} />
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