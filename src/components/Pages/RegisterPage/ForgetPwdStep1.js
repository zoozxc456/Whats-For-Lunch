/* Import React Hooks */
import { useRef, useState } from "react";

/* Import Bootstrap Modules */
import { Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";

/* Import Assets */
import back from '../../Assets/images/back.png';

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

const ForgetPwdStep1 = ({showNextStepComponent}) => {
    const email = useRef("");
    const [fieldErrorList, setFieldErrorList] = useState([]);
    const handleLogInClick = event => {
        window.location.href = "/"
    }

    const handleIsInvalid = field => {
        return fieldErrorList.indexOf(field) !== -1
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
                <Form id="ForgetPasswordForm" className="align-self-center mx-auto w-75">
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
                            isInvalid={handleIsInvalid("Email")}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your E-mail
                        </Form.Control.Feedback>
                    </Form.Group>

                    <ButtonGroup className="w-100 mt-3">
                        <Button type="button" className="me-1" onClick={showNextStepComponent}> 下一步 <span></span></Button>
                    </ButtonGroup>
                </Form>
            </Row>
        </div>
    )
    return view;
};

export default ForgetPwdStep1;