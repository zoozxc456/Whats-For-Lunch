import logo from '../../Assets/images/logo.png';
import pizza from '../../Assets/images/pizza.png';
import rice from '../../Assets/images/rice.png';
import google from '../../Assets/images/google.png';
import line from '../../Assets/images/line.png';
import './IndexPage.css';
import React, { useState } from 'react';
import { Col, Row, Button } from "react-bootstrap";

const LoginComponent = (
    <Col className="login_block">
        <div className='login fs-3 my-2'>登入<span className='fs-3 ps-2' style={{ 'fontWeight': '400' }}>Login</span> </div>
        <div className='my-1'>
            <input className='py-1 ps-2' placeholder='電子郵件帳號'></input>
        </div>
        <div className='my-1'>
            <input className='py-1 ps-2' placeholder='密碼'></input>
        </div>
        <div className='forget_txt fs-6 my-2'>忘記密碼？</div>
        <div className="line2 mx-auto"></div>
        <div className="mb-2 mt-3">
            <div className="my-1">
                <Button className="fs-6">
                    <img src={google} className="me-1" alt="google" style={{ width: '17px' }} />
                    使用Google帳號登入
                </Button>
            </div>
            <div className="my-1">
                <Button className="fs-6">
                    <img src={line} className="me-3" alt="line" style={{ width: '19px' }} />
                    使用LINE帳號登入
                </Button>
            </div>
        </div>
    </Col>
);

const AboutUsComponent = (
    < Col className="about_block" >
        <span style={{ 'color': '#FFC940' }}>What's for Lunch?</span>
        是專為團體訂餐
        設計的線上訂購系統，省去單獨記錄的
        時間，給使用者快速便利的訂餐模式，
        一起讓揪團訂餐變得更輕鬆吧！
        <div style={{ 'color': '#FFBCA7' }}><span>By </span>開發團隊</div>
    </Col >
);



const IndexPageComponent = () => {
    // const [payload, setPayload] = useState(null);
    // const [idToken, setIdToken] = useState(null);
    const [content, setContent] = useState(null);

    const showAboutUs = () => {
        console.log(123)
        setContent(AboutUsComponent)
    }
    const showLogin=()=>{
        setContent(LoginComponent)
    }

    return (

        <div id="home" >
            <div className="main mx-auto py-2">
                <img src={pizza} className="pizza" alt="pizza" />
                <img src={rice} className="rice" alt="rice" />
                <Row className="title">
                    <Col>
                        <img src={logo} className="logo" alt="logo" />
                    </Col>
                </Row>
                <Row className="title">
                    <Col>What's for Lunch?</Col>
                </Row>
                <Row className="line mx-auto"></Row>

                {/* middle */}
                <Row className="middle_before mt-3 mb-4 mx-auto fs-5">
                    <Col>專為團體訂餐設計的線上訂購系統</Col>
                </Row>
                <Row className={`middle_after mt-3 mb-4 mx-auto fs-5 px-5 py-2 ${content?'':'d-none'}`}>
                    {content}

                </Row>

                <Row className="bottom px-5">
                    <Col className="my-1"><Button className="about-btn fs-5" onClick={showAboutUs}>關於我們</Button></Col>
                    <Col className="my-1"><Button className="login-btn fs-5" onClick={showLogin}>登入</Button></Col>
                </Row>
            </div>
        </div>
    );
}

export default IndexPageComponent;
