import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';
import Header from '../Header/Header';

/* Import Components */
import Register from './Register';
import ForgetPassword from './ForgetPassword';

const RegisterPage = () => {
    const [content, setContent] = useState(null);

    const showForgetPassword = ()=>{
        const ForgetPasswordComponent = <ForgetPassword />
        setContent(ForgetPasswordComponent);
    }

    const showRegister = () => {
        const RegisterComponent = <Register />
        setContent(RegisterComponent)
    }

    useEffect(() => {
        if (window.location.search === '?content=register') {
            showRegister()
        } else if (window.location.search === '?content=forgetpassword') {
           showForgetPassword()
        } else {
            window.location.href = "/"
        }
    },[]);

    return (
        <div>
            <Header />

            <div id='under_index' className="mx-auto my-0">
                {content}
            </div>
        </div>
    )
}

export default RegisterPage;