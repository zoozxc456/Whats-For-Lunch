import { Col, Form, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterService from "../../../services/Register/Register.service";
import React from 'react';
const RegisterPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fieldErrorList, setFieldErrorList] = useState([]);

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

    const handleSignUpClick = async event => {

        if (checkSignUpFormData()) {
            await registerAndLogin();
        }

    }

    const handleLogInClick = event => {
        window.location.href = "/Login"
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

    const registerAndLogin = async ()=>{

        const registerReqBody = {
            "name": username,
            "email": email,
            "password": password,
            "role": "user"
        }

        try {
            const accessToken = await RegisterService.register(registerReqBody);

            localStorage.setItem("accessToken", accessToken);
        }
        catch (exception) {
            console.log(exception);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <Form id="SignUpForm" className="align-self-center mx-auto w-75 border p-3">
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

                {/* Password Field */}
                <Form.Group as={Col} className={""}>
                    <Form.Label>Password</Form.Label>
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

                {/* Username Field */}
                <Form.Group as={Col} className={""}>
                    <Form.Label>Username</Form.Label>
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

                <ButtonGroup className="w-100">
                    <Button type="button" className="me-1" onClick={handleSignUpClick}>Sign Up</Button>

                    <Button type="button" className="ms-1" onClick={handleLogInClick}>Log In</Button>
                </ButtonGroup>


            </Form>
        </div>

    )
}

export default RegisterPage;