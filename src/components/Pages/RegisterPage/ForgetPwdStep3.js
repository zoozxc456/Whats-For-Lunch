
/* Import React Hooks */
import { useState, useRef } from "react";

/* Import Bootstrap Modules */
import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";

/* Import Assets */
import back from '../../Assets/images/back.png';

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

const ForgetPwdStep3 = ({ showNextStepComponent }) => {
    // const [password, setPassword] = useState("");
    const password = useRef();
    const [isInvalidPassword, setisInvalidPassword] = useState(false);
    const [formFeedbackText, setFormFeedbackText] = useState("");
    const confirmPwd = useRef();
    const [isInvalidConfirmPwd, setisInvalidConfirmPwd] = useState(false);
    const [formFeedbackText2, setFormFeedbackText2] = useState("");
    const [fieldErrorList, setFieldErrorList] = useState([]);
    const handleLogInClick = event => {
        window.location.href = "/"
    }

    // const handlePasswordChangeEvent = event => {
    //     const password_Value = event.target.value;
    //     setPassword(password_Value);
    // }
    const handleIsInvalid = field => {
        return fieldErrorList.indexOf(field) !== -1
    }
    const checkPassword = () => {

        const passwordValue = password.current.value
        if (passwordValue === "") {
            setisInvalidPassword(true)
            setFormFeedbackText("請輸入新密碼")
        } else {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            if (!passwordValue.match(passwordRegex)) {
                setisInvalidPassword(true)
                setFormFeedbackText("新密碼格式錯誤")
            }else{
                setisInvalidPassword(false)
            }
        }

        const confirmPwdValue = confirmPwd.current.value
        if (confirmPwdValue === "") {
            setisInvalidConfirmPwd(true)
            setFormFeedbackText2("請再次輸入新密碼")
        } else {
            if (confirmPwdValue === passwordValue) {
                setisInvalidConfirmPwd(false)
                showNextStepComponent()
            } else {
                setisInvalidConfirmPwd(true)
                setFormFeedbackText2("新密碼輸入錯誤")
            }

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
                <Col xs={1} className={`text-center p-1 mx-2`}>1</Col>
                <Col xs={1} className='text-center p-1 mx-2'>2</Col>
                <Col xs={1} className='text-center p-1 mx-2 now'>3</Col>
            </Row>
            <Row className="m-0">
                <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75">
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>輸入新密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="6+ Characters, 1 Capital letter"
                            ref={password}
                            // onChange={handlePasswordChangeEvent}
                            isInvalid={isInvalidPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formFeedbackText}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>確認新密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="6+ Characters, 1 Capital letter"
                            ref={confirmPwd}
                            // onChange={handlePasswordChangeEvent}
                            isInvalid={isInvalidConfirmPwd}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formFeedbackText2}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={checkPassword}> 下一步 <span></span></Button>
                    </ButtonGroup>

                </Form>
            </Row>
        </div>
    )

    return view;
};

export default ForgetPwdStep3;