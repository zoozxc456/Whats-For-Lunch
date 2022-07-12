import logo from '../../Assets/images/logo.png';
import pizza from '../../Assets/images/pizza.png';
import rice from '../../Assets/images/rice.png';
import google from '../../Assets/images/google.png';
import line from '../../Assets/images/line.png';
import './IndexPage.css';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import axios from 'axios';


const IndexPageComponent = () => {
    // const [payload, setPayload] = useState(null);
    // const [idToken, setIdToken] = useState(null);
    const [content, setContent] = useState(null);
    // const email = useRef("");
    // const password = useRef("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [isInvalidClick, setIsInvalidClick] = useState("disabled");
    const [isInvalidEmail, setIsInvalidEmail] = useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    // const emailValue = email.current.value;
    // const passwordValue = password.current.value;
    useEffect(() => {
        // console.log(emailValue, passwordValue)
        // if (emailValue !== undefined && passwordValue !== undefined) {
        //     console.log("should remove disabled")
        //     setIsInvalidClick("false")
        // }
        console.log(email, password)
        if (email.length <= 0 || password.length <= 0) {
            // document.querySelector(".loginbtn").setAttribute("disabled",true)
            setDisabled(true)

        } else {
            console.log(123)
            // document.querySelector(".loginbtn").removeAttribute("disabled")
            setDisabled(false)
        }

    }, [email, password, disabled]);

    const checkLogin = () => {


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
                <input className='py-1 ps-2' placeholder='電子郵件帳號' onChange={(event) => setEmail(event.target.value)} ></input>
            </div>
            <div className='my-1'>
                <input className='py-1 ps-2' placeholder='密碼' type={"password"} onChange={(event) => setPassword(event.target.value)}></input>
            </div>
            <div className='function_txt fs-6 my-2'>
                <span onClick={handleRegister}>註冊</span> | <span onClick={handleForgetPassword}>忘記密碼？</span>

            </div>
            <div className="line2 mx-auto"></div>
            <div className='mb-5'>
                <div className="mb-2 mt-3">
                    <div className="my-1">
                        <button className="loginbtn" disabled ={disabled?true:""}>登入1</button>
                        {/* <Button className="loginbtn fs-6" onClick={checkLogin}>
                            登入
                        </Button> */}
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
        < Col className="about_block" >
            <div className='my-5'>
                <span style={{ 'color': '#FFC940' }}>What's for Lunch?</span>
                是專為團體訂餐
                設計的線上訂購系統，省去單獨記錄的
                時間，給使用者快速便利的訂餐模式，
                一起讓揪團訂餐變得更輕鬆吧！
                <div className='byWHO mt-5'><span>By </span>開發團隊</div>
            </div>
        </Col >
    );


    return (

        <div id="home" >
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
