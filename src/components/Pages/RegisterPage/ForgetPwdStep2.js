/* Import React Hooks */
import { useState, useEffect, useRef } from "react";

/* Import Bootstrap Modules */
import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";

/* Import Assets */
import back from '../../Assets/images/back.png';

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

const ForgetPwdStep2 = ({ showNextStepComponent }) => {
    const correctVaildCode="12345"
    const validCode = useRef("")
    // const [validCode, setValidCode] = useState(null);
    const [isValidCode, setIsValidCode] = useState(false);
    const [formFeedbackText, setFormFeedbackText] = useState("")
    const [fieldErrorList, setFieldErrorList] = useState([]);
    const [content, setContent] = useState("");
    const [second, setSecond] = useState(60);

    const handleLogInClick = event => {
        window.location.href = "/"
    }

    // const handleEmailChangeEvent = event => {
    //     const email_Value = event.target.value;
    //     setEmail(email_Value);
    // }

    const checkValidCode = () => {
        const validCodeValue=validCode.current.value
        if ( validCodeValue=== "") {
            setIsValidCode(true)
            setFormFeedbackText("請輸入驗證碼")
        } else {
            if (validCodeValue === correctVaildCode) {
                setIsValidCode(false)
                showNextStepComponent()
            } else {
                setIsValidCode(true)
                setFormFeedbackText("請輸入正確的驗證碼")
            }
        }
    }

    const handleIsInvalid = field => {
        return fieldErrorList.indexOf(field) !== -1
    }
    const reset = () => {
        if (second === 0) {
            setSecond(60)
        }
    }

    useEffect(() => {
        if (second > 0) {
            setTimeout(() => {
                setSecond(second - 1)
            }, 1000);
            setContent(`沒有收到驗證碼？(` + second + `)`)
        } else {
            console.log(0)
            setContent(`重新發送?`)
        }
    }, [second]);



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
                <Col xs={1} className='text-center p-1 mx-2 now'>2</Col>
                <Col xs={1} className='text-center p-1 mx-2'>3</Col>
            </Row>
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
                            ref={validCode}
                            isInvalid={isValidCode}
                        />
                        <Form.Control.Feedback type="invalid">
                            {formFeedbackText}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className='mt-2 code_text' onClick={reset}>{content}</div>

                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={checkValidCode}> 下一步 <span></span></Button>
                    </ButtonGroup>
                </Form>
            </Row>
        </div>
    )

    return view;
};

export default ForgetPwdStep2;