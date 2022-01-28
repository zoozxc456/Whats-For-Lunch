import { Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css'
import LineLogin from "../../Buttons/LineLoginButton/LineLoginButton";
import LoginService from "../../../services/Login/LoginService";
const LoginPage = (props) => {
    const [validated, setValidate] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async(event) => {
        setValidate(true);
        const reqBody = {
            "email": email,
            "password": password,
            "loginType": "original"
        };

        const loginResult = await LoginService.login(reqBody);

        if (loginResult){
            window.location.href="/Home"
        }
        // console.log(await LoginService.login(reqBody))

        console.log(reqBody);
    }

    const handleRegister = (event) => {
        window.location.href = "/register"
    }

    const handleEmailChange = (event) => {
        const email_Value = event.target.value;
        console.log("Email:", email_Value);
        setEmail(email_Value);
    }

    const handlePasswordChange = (event) => {
        const password_Value = event.target.value;
        console.log("Password:", password_Value);
        setPassword(password_Value);
    }

    return (
        <div className="container d-flex justify-content-center">
            <Form id="LoginForm" className="align-self-center mx-auto w-50 border p-3" validated={validated}>
                {/* E-mail Field */}
                <Form.Group as={Col} className={""}>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        placeholder="E-mail"
                        onChange={handleEmailChange}
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
                        placeholder="Password"
                        onChange={handlePasswordChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please Enter Your Password
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="button" className="w-100" onClick={handleSubmit}>Submit</Button>
                <Button type="button" className="w-100" onClick={handleRegister}>Register</Button>
                <LineLogin />
            </Form>
        </div>

    )

}

export default LoginPage;