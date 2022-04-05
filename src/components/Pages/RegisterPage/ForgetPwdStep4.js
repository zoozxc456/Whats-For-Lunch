/* Import React Hooks */
import { useEffect } from "react";

/* Import CSSs */
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterPage.css';

const ForgetPwdStep4 = () => {

    const redirectToIndexPage = () => window.location.href = "/";

    useEffect(() => {
        setTimeout(() => {
            redirectToIndexPage();
        }, 3000)
    }, [])
    const view = (
        <div id="forgetpwd">
            <div className='step4 py-auto'>
                <h3>密碼已變更！請重新登入</h3>
                <div className='txt'>3秒後將跳轉至首頁</div>
            </div>
        </div>
    )

    return view;
};

export default ForgetPwdStep4;