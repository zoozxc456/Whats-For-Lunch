/* Import React Hooks */
import { useState, useRef } from "react";

/* Import Bootstrap Modules */
import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";

/* Import Assets */
import back from '../../Assets/images/back.png';

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

import { emailIsMeetRule, passwordIsMeetRule } from "../../../utils/meetRule";
import axios from "axios";
const Register = () => {
    const email = useRef("");
    const username = useRef("");
    const password = useRef("");
    const confirmPwd = useRef();
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidUsername, setIsInvalidUsername] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isInvalidConfirmPwd, setIsInvalidConfirmPwd] = useState(false);
    const [invalidEmailMessage, setInvalidEmailMessage] = useState("");
    const [invalidUsernameMessage, setInvalidUsernameMessage] = useState("");
    const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("");
    const [invalidConfirmPwdMessage, setInvalidConfirmPwdMessage] = useState("");

    const handleLogInClick = event => {
        window.location.href = "/"
    }
    const checkEmail = () => {
        if (email.current.value === "") {
            setInvalidEmailMessage("請輸入Email")
            setIsInvalidEmail(true)
            return false
        } else if (!emailIsMeetRule(email.current.value)) {
            setInvalidEmailMessage("Email格式錯誤")
            setIsInvalidEmail(true)
            return false
        } else {
            setIsInvalidEmail(false)
            // console.log(email.current.value)
            return true
        }
    }
    const checkUsername = () => {
        if (username.current.value === "") {
            setInvalidUsernameMessage("請輸入使用者名稱")
            setIsInvalidUsername(true)
            return false
        } else {
            setIsInvalidUsername(false)
            return true
        }
    }
    const checkPassword = () => {
        if (password.current.value === "") {
            setInvalidPasswordMessage("請輸入密碼")
            setIsInvalidPassword(true)
            return false
        } else if (!passwordIsMeetRule(password.current.value)) {
            setInvalidPasswordMessage("密碼格式錯誤")
            setIsInvalidPassword(true)
            return false
        } else {
            setIsInvalidPassword(false)
            return true
        }
    }
    const checkConfirmPwd = () => {
        if (password.current.value === "") {
            setInvalidConfirmPwdMessage("請輸入確認密碼")
            setIsInvalidConfirmPwd(true)
            return false
        } else if (password.current.value !== confirmPwd.current.value) {
            setInvalidConfirmPwdMessage("密碼輸入錯誤")
            setIsInvalidConfirmPwd(true)
            return false
        } else {
            setIsInvalidConfirmPwd(false)
            return true
        }
    }
    const checkSignup = () => {
        const checkEmailResult = checkEmail();
        const checkUsernameResult = checkUsername();
        const checkPasswordResult = checkPassword();
        const checkConfirmPwdResult = checkConfirmPwd();
        if (checkEmailResult && checkUsernameResult && checkPasswordResult && checkConfirmPwdResult) {
            // Register API
            const apiRootUrl = process.env.REACT_APP_API_ROOT;
            const originalSignupPayload = {
                "email": email.current.value,
                "password": password.current.value,
                "username": username.current.value
            };
            axios.post(`${apiRootUrl}/user/register`, originalSignupPayload)
                .then((res) => {
                    alert("註冊成功")
                    window.location.href = "/"
                }).catch((err) => {
                    alert("註冊失敗")
                    // console.log(err)
                })
        } else {
            console.log("error")
        }
    }

    const view = (
        <div id="register">
            <Row className="text-center">
                <Col xs={2} className='my-5 fs-3 p-0'>
                    <img src={back} className={`back`} alt="back" onClick={handleLogInClick} />
                </Col>
                <Col xs={8} className='my-5 fs-3 p-0'>
                    <b>註冊</b>
                    <span> Sign up</span>
                </Col>
                <Col xs={2} className='my-5 fs-3 p-0'>

                </Col>
            </Row>
            {/* form */}
            <Row className="m-0">
                <Form id="SignUpForm" className="align-self-center mx-auto w-75">
                    {/* E-mail Field */}
                    <Form.Group as={Col} className={""}>
                        <div className="">
                            <Form.Label className="me-3">E-mail</Form.Label>
                        </div>

                        <Form.Control
                            type="email"
                            required
                            placeholder="name@mail.com"
                            ref={email}
                            isInvalid={isInvalidEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                            {invalidEmailMessage}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Username Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>使用者名稱</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="請輸入使用者名稱"
                            ref={username}
                            isInvalid={isInvalidUsername}
                        />
                        <Form.Control.Feedback type="invalid">
                            {invalidUsernameMessage}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="須包含一個大寫字母、一個小寫字母，６～２０個字"
                            ref={password}
                            isInvalid={isInvalidPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {invalidPasswordMessage}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>確認密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="須包含一個大寫字母、一個小寫字母，６～２０個字"
                            ref={confirmPwd}
                            isInvalid={isInvalidConfirmPwd}
                        />
                        <Form.Control.Feedback type="invalid">
                            {invalidConfirmPwdMessage}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={checkSignup}> 註冊 <span></span></Button>
                    </ButtonGroup>
                </Form>
            </Row>
        </div>
    )

    return view;
};

export default Register;