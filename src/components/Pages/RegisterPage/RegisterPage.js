
import back from '../../Assets/images/back.png';

import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Notify from '../Notify/Notify';

const RegisterPage = () => {
    const [content, setContent] = useState(null);
    const [ForgetPwdContent, setForgetPwdContent] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fieldErrorList, setFieldErrorList] = useState([]);

    const showForgetPwd = () => {
        console.log('showForgetPwd1')
        setForgetPwdContent(ForgetPwd1);
        setContent(ForgetPwdComponent);
    }
    const showForgetPwd2 = () => {
        console.log('showForgetPwd2')
        setForgetPwdContent(ForgetPwd2);
    }
    const showForgetPwd3 = () => {
        console.log('showForgetPwd3')
        setForgetPwdContent(ForgetPwd3);
    }
    const showRegister = () => {
        setContent(RegisterComponent)
    }

    const handleEmailChangeEvent = event => {
        const email_Value = event.target.value;
        setEmail(email_Value);
    }

    const handlePasswordChangeEvent = event => {
        const password_Value = event.target.value;
        setPassword(password_Value);
    }

    const handleUsernameChangeEvent = event => {
        const username_Value = event.target.value;
        setUsername(username_Value);
    }

    const handleIsInvalid = field => {
        return fieldErrorList.indexOf(field) !== -1
    }

    const handleSignUpClick = event => {

        if (checkSignUpFormData()) {

        }
    }

    const handleLogInClick = event => {
        window.location.href = "/"
    }

    const checkSignUpFormData = () => {
        const localFieldErrorList = [];

        // Check Email
        if (!emailIsMeetRule()) {
            localFieldErrorList.push("Email");
        }

        // Check Password
        if (!passwordIsMeetRule()) {
            localFieldErrorList.push("Password");
        }

        // Check Username
        if (!usernameIsMeetRule()) {
            localFieldErrorList.push("Username");
        }

        setFieldErrorList(localFieldErrorList)
        return localFieldErrorList.length <= 0;
    }

    const emailIsMeetRule = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(emailRegex) ?? false;
    }

    const passwordIsMeetRule = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return password.match(passwordRegex) ?? false;
    }

    const usernameIsMeetRule = () => {
        return username.length > 0;
    }
    useEffect(() => {
        if (window.location.search === '?content=register') {
            showRegister()
        } else if (window.location.search === '?content=forgetpassword') {
            showForgetPwd()
        } else {
            window.location.href = "/"
        }
    }, []);
    const ForgetPwd3 = (
        <Row className="m-0">
            <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75">
                <Form.Group as={Col} className={"mt-2"}>
                    <Form.Label>密碼</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        placeholder="6+ Characters, 1 Capital letter"
                        onChange={handlePasswordChangeEvent}
                        isInvalid={handleIsInvalid("Password")}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter Your Password
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className={"mt-2"}>
                    <Form.Label>確認密碼</Form.Label>
                    <Form.Control
                        type="password"
                        required
                        placeholder="6+ Characters, 1 Capital letter"
                        onChange={handlePasswordChangeEvent}
                        isInvalid={handleIsInvalid("Password")}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter Your Password
                    </Form.Control.Feedback>
                </Form.Group>



                <ButtonGroup className="w-100 mt-3">
                    <Button type="button" className="me-1" onClick={handleSignUpClick}> 下一步 <span></span></Button>
                </ButtonGroup>


            </Form>
        </Row>
    );
    const ForgetPwd2 = (
        <Row className="m-0">
            <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75">
                <Form.Group as={Col} className={""}>
                    <div className="">
                        <Form.Label className="me-3">輸入驗證碼</Form.Label>
                    </div>

                    <Form.Control
                        type="email"
                        required
                        placeholder="輸入驗證碼"
                        onChange={handleEmailChangeEvent}
                        isInvalid={handleIsInvalid("Email")}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter Your E-mail
                    </Form.Control.Feedback>
                </Form.Group>



                <ButtonGroup className="w-100 mt-3">
                    <Button type="button" className="me-1" onClick={showForgetPwd3}> 下一步 <span></span></Button>
                </ButtonGroup>


            </Form>
        </Row>
    );
    const ForgetPwd1 = (
        <Row className="m-0">
            <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75">
                {/* E-mail Field */}
                <Form.Group as={Col} className={""}>
                    <div className="">
                        <Form.Label className="me-3">E-mail</Form.Label>
                    </div>

                    <Form.Control
                        type="email"
                        required
                        placeholder="name@mail.com"
                        onChange={handleEmailChangeEvent}
                        isInvalid={handleIsInvalid("Email")}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter Your E-mail
                    </Form.Control.Feedback>
                </Form.Group>



                <ButtonGroup className="w-100 mt-3">
                    <Button type="button" className="me-1" onClick={showForgetPwd2}> 下一步 <span></span></Button>
                </ButtonGroup>


            </Form>
        </Row>
    );

    const ForgetPwdComponent = (
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
            {ForgetPwdContent}
        </div>
    );
    const RegisterComponent = (
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
                            onChange={handleEmailChangeEvent}
                            isInvalid={handleIsInvalid("Email")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your E-mail
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Username Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>使用者名稱</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            placeholder="Fill in your username"
                            onChange={handleUsernameChangeEvent}
                            isInvalid={handleIsInvalid("Username")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your Username
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="6+ Characters, 1 Capital letter"
                            onChange={handlePasswordChangeEvent}
                            isInvalid={handleIsInvalid("Password")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your Password
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group as={Col} className={"mt-2"}>
                        <Form.Label>確認密碼</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="6+ Characters, 1 Capital letter"
                            onChange={handlePasswordChangeEvent}
                            isInvalid={handleIsInvalid("Password")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your Password
                        </Form.Control.Feedback>
                    </Form.Group>


                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={handleSignUpClick}> 註冊 <span></span></Button>
                    </ButtonGroup>


                </Form>
            </Row>
        </div>
    );
    return (
        <div>
            <Header />
            <Aside />
            <Notify />

            <div id='under_index' className="mx-auto my-0">
                {content}
            </div>
        </div>
    )
}

export default RegisterPage;