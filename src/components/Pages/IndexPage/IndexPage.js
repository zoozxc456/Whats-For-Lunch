import logo from '../../Assets/images/logo.png';
import pizza from '../../Assets/images/pizza.png';
import rice from '../../Assets/images/rice.png';
import google from '../../Assets/images/google.png';
import line from '../../Assets/images/line.png';
import './IndexPage.css';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import axios from 'axios';
import { emailIsMeetRule, passwordIsMeetRule } from "../../../utils/meetRule"

const IndexPageComponent = () => {
    const [content, setContent] = useState(null);
    const email = useRef("");
    const password = useRef("");
    // const [buttonDisabled, setButtonDisabled] = useState("");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);

    const verifyLoginData = () => {
        if (!emailIsMeetRule(email.current.value)) {
            setIsInvalidEmail(true);
            alert("Email格式錯誤")
            return false;
        } else if (!passwordIsMeetRule(password.current.value)) {
            setIsInvalidPassword(true);
            alert("密碼格式錯誤")
            return false;
        } else {
            setIsInvalidEmail(false);
            setIsInvalidPassword(false);
            return true;
        }
    }

    const checkLogin = () => {
        if (email.current.value === "" && password.current.value === "") {
            setIsInvalidEmail(true);
            setIsInvalidPassword(true);
            alert("請輸入帳號密碼")
        } else if (email.current.value === "") {
            setIsInvalidEmail(true);
            alert("請輸入帳號")
        } else if (password.current.value === "") {
            setIsInvalidPassword(true);
            alert("請輸入密碼")
        } else {
            const isValidLoginData = verifyLoginData();
            if (isValidLoginData) {
                // Login API
                const apiRootUrl = process.env.REACT_APP_API_ROOT;
                const originalLoginPayload = {
                    "loginType": "original",
                    "email": email.current.value,
                    "password": password.current.value
                };
                axios.post(`${apiRootUrl}/user/login`, originalLoginPayload)
                    .then((res) => {
                        const { accessToken } = res.data.payload
                        localStorage.setItem('accessToken', accessToken);
                        window.location.href = "/home"
                    }).catch((err) => {
                        alert("帳號或密碼錯誤")
                    })
            }
        }

    }
    const removeContent = () => {
        setContent('')
    }
    const showAboutUs = () => {
        setContent(AboutUsComponent)
    }
    const showLogin = () => {
        setContent(LoginComponent)
    }
    const handleRegister = (event) => {
        window.location.href = "/register?content=register"
    }
    const handleForgetPassword = (event) => {
        window.location.href = "/register?content=forgetpassword"
    }
    const LoginComponent = (
        <Col className="login_block">
            <div className='login mt-5'>
                <b>登入</b>
                <span>Login</span>
            </div>
            <div className='my-1'>
                <input className='py-1 ps-2' placeholder='電子郵件帳號' ref={email}></input>
            </div>
            <div className='my-1'>
                <input className='py-1 ps-2' placeholder='密碼' type={"password"} ref={password} ></input>
            </div>
            <div className='function_txt fs-6 my-2'>
                <span onClick={handleRegister}>註冊</span> | <span onClick={handleForgetPassword}>忘記密碼？</span>

            </div>
            <div className="line2 mx-auto"></div>
            <div className='mb-5'>
                <div className="mb-2 mt-3">
                    <div className="my-1">
                        <Button className={`loginbtn fs-6`} onClick={checkLogin}>登入</Button>
                    </div>
                    <div className="my-1">
                        <Button className="google_btn fs-6">
                            <img src={google} className="me-1" alt="google" style={{ width: '17px' }} />
                            使用Google帳號登入
                        </Button>
                    </div>
                    <div className="my-1">
                        <Button className="line_btn fs-6">
                            <img src={line} className="me-3" alt="line" style={{ width: '19px' }} />
                            使用LINE帳號登入
                        </Button>
                    </div>
                </div>
            </div>
        </Col>
    );

    const AboutUsComponent = (
        <Col className="about_block">
            <div className='my-5'>
                <span style={{ 'color': '#FFC940' }}>What's for Lunch?</span>
                是專為團體訂餐
                設計的線上訂購系統，省去單獨記錄的
                時間，給使用者快速便利的訂餐模式，
                一起讓揪團訂餐變得更輕鬆吧！
                <div className='byWHO mt-5'><span>By </span>開發團隊</div>
            </div>
        </Col>
    );


    return (
        <div id="home">
            <div className="main mx-auto py-2">
                <img src={pizza} className="pizza" alt="pizza" />
                <img src={rice} className="rice" alt="rice" />
                <Row className="title" onClick={removeContent}>
                    <Col>
                        <img src={logo} className={`logo ${content ? 'logo_active' : ''}`} alt="logo" />
                    </Col>
                </Row>
                <Row className={`title ${content ? 'title_active' : ''}`} onClick={removeContent}>
                    <Col>What's for Lunch?</Col>
                </Row>
                <Row className={`line mx-auto ${content ? 'd-none' : ''}`}></Row>

                {/* middle */}
                <Row className={`middle_before mt-3 mb-4 mx-auto fs-5 ${content ? 'd-none' : ''}`}>
                    <Col>專為團體訂餐設計的線上訂購系統</Col>
                </Row>
                <Row className={`middle_after mt-3 mb-4 mx-auto fs-5 px-sm-3 px-md-5 px-2 py-2 ${content ? '' : 'd-none'}`}>
                    {content}
                </Row>

                <Row className="bottom px-5">
                    <Col className="my-1"><Button className="about-btn fs-5" onClick={showAboutUs}>關於我們</Button></Col>
                    <Col className="my-1"><Button className="login-btn fs-5" onClick={showLogin}>登入</Button></Col>
                </Row>
            </div>
            <div id="Copyright" className={`${content ? 'd-none' : ''}`}>
                Copyright © 2022 All Rights Reserved.
            </div>
        </div>
    );
}

export default IndexPageComponent;
