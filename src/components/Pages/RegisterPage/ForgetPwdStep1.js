/* Import React Hooks */
import { useRef, useState } from "react";
import { emailIsMeetRule } from "../../../utils/meetRule";
/* Import Bootstrap Modules */
import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";

/* Import Assets */
import back from '../../Assets/images/back.png';

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import axios from "axios";

const ForgetPwdStep1 = ({ showNextStepComponent,setUserEmail }) => {
    const email = useRef("");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [formFeedbackText, setFormFeedbackText] = useState("")
    const handleLogInClick = event => {
        window.location.href = "/"
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        checkEmail();
    }

    const verifyEmailStatusHandlers = {
        validEmail: () => {
            setIsInvalidEmail(false);
            setUserEmail(email.current.value)
            showNextStepComponent();
        },
        invalidEmail: (errorMessage) => {
            setFormFeedbackText(errorMessage);
            setIsInvalidEmail(true);
        }
    }

    const announceUpdatePasswordRequest = (emailValue) => {
        const checkEmailPayload = { "email": emailValue };
        const apiRootUrl = process.env.REACT_APP_API_ROOT;
        console.log(apiRootUrl)
        return axios.post(`${apiRootUrl}/user/forget/email`, checkEmailPayload)
            .then((res) => {
                return true;
            }).catch((err) => {
                return false;
            })
    }

    const checkEmail = async () => {
        const emailValue = email.current.value;
        const { validEmail, invalidEmail } = verifyEmailStatusHandlers;

        if (emailValue && emailIsMeetRule(emailValue)) {
            const isAnnounceSuccess = await announceUpdatePasswordRequest(emailValue);
            isAnnounceSuccess ? validEmail() : invalidEmail("請輸入正確的E-mail");
        } else if (emailValue !== "") {
            invalidEmail("請輸入正確的E-mail")
        } else {
            invalidEmail("請輸入E-mail")
        }
    }

    const view = (
        <div id="forgetpwd">
            <Row className="text-center">
                <Col xs={2} className='my-5 fs-3 p-0'>
                    <img src={back} className={`back`} alt="back" onClick={handleLogInClick} />
                </Col>
                <Col xs={8} className='my-5 fs-3 p-0'>
                    <b>忘記密碼</b>
                    <span> Forget Password</span>
                </Col>
                <Col xs={2} className='my-5 fs-3 p-0'>

                </Col>
            </Row>
            <Row className='number mx-auto'>
                <Col xs={1} className={`text-center p-1 mx-2 now`}>1</Col>
                <Col xs={1} className='text-center p-1 mx-2'>2</Col>
                <Col xs={1} className='text-center p-1 mx-2'>3</Col>
            </Row>
            <Row className="m-0">
                <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75" onSubmit={handleFormSubmit}>
                    {/* E-mail Field */}
                    <Form.Group as={Col} className={""}>
                        <div className="">
                            <Form.Label className="me-3">輸入您註冊的E-mail</Form.Label>
                        </div>

                        <Form.Control
                            type="email"
                            required
                            placeholder="name@mail.com"
                            ref={email}
                            isInvalid={isInvalidEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formFeedbackText}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={checkEmail}> 下一步 <span></span></Button>
                    </ButtonGroup>
                </Form>
            </Row>
        </div>
    )
    return view;
};

export default ForgetPwdStep1;