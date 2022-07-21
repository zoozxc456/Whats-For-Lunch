import axios from "axios";
import { useState, useEffect, useRef } from "react";
import style from "./EditDialog.module.scss";
const EditDialog = (props) => {
    const [type, setType] = useState(null);
    const [pwdStep2, setPwdStep2] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [content, setContent] = useState(null);
    const password = useRef();
    const newPassword = useRef();
    const confirmNewPassword = useRef();

    const closeDialog = () => {
        props.closeDialog()
        setPwdStep2(false);
        setIsSuccess(false)
    }

    const editPassword = () => {
        // alert("修改成功")
        // closeDialog()
        setIsSuccess(true)

    }

    const checkPassword = () => {
        const passwordValue = password.current.value;
        if (passwordValue !== "") {
            const accessToken = localStorage.getItem("accessToken")
            const headers = { headers: { authorization: `Bearer ${accessToken}` } }
            const payload = { "old_password": passwordValue }
            // setContent(editPasswordView)  

            axios.post(`${process.env.REACT_APP_API_ROOT}/user/identify`, payload, headers)
                .then((res) => {
                    // console.log(newPassword)
                    // newPassword.current.value=""
                    setPwdStep2(true)
                }).catch((err) => {
                    console.log(err)
                    alert("密碼錯誤")
                })
        } else {
            alert("請輸入密碼")
        }
    }
    const successView = (
        <div className={style.dialog}>
            <div className={style.dialog_body}>
                <div className={style.title}>修改成功!</div>

            </div>
            <div className={style.dialog_footer}>
                <div className={style.btn_container}>
                    <button className={style.cancel_btn} onClick={closeDialog}>關閉</button>
                </div>
            </div>
        </div>
    );
    const editEmailView = (
        <div className={style.dialog}>
            <div className={style.dialog_body}>
                <div className={style.title}>修改電子郵件</div>
                <input type={"email"} placeholder={"請輸入電子郵件"} />
            </div>
            <div className={style.dialog_footer}>
                <div className={style.btn_container}>
                    <button>修改</button>
                </div>
                <div className={style.btn_container}>
                    <button className={style.cancel_btn} onClick={closeDialog}>取消</button>
                </div>
            </div>
        </div>
    );

    const editNameView = (
        <div className={style.dialog}>
            <div className={style.dialog_body}>
                <div className={style.title}>修改真實姓名</div>
                <input type={"text"} placeholder={"請輸入真實姓名"} />
            </div>
            <div className={style.dialog_footer}>
                <div className={style.btn_container}>
                    <button>修改</button>
                </div>
                <div className={style.btn_container}>
                    <button className={style.cancel_btn} onClick={closeDialog}>取消</button>
                </div>
            </div>
        </div>
    );

    const confirmOldPasswordView = (
        <div className={`${style.dialog}`}>
            <div className={style.dialog_body}>
                <div className={style.title}>確認身份</div>
                <input type={"password"} placeholder={"請輸入舊密碼"} ref={password} />
            </div>

            <div className={style.dialog_footer}>
                <div className={style.btn_container}>
                    <button onClick={checkPassword}>確認</button>
                </div>
                <div className={style.btn_container}>
                    <button className={style.cancel_btn} onClick={closeDialog}>取消</button>
                </div>
            </div>
        </div>
    );

    const editPasswordView = (
        <div className={`${style.dialog} ${style.pwd_dialog}`}>
            <div className={style.dialog_body}>
                <div className={style.title}>修改密碼</div>
                <input type={"password"} placeholder={"請輸入新密碼"} ref={newPassword} />
                <div className={style.title}>確認密碼</div>
                <input type={"password"} placeholder={"請再次輸入新密碼"} ref={confirmNewPassword} />
            </div>
            <div className={style.dialog_footer}>
                <div className={style.btn_container}>
                    <button onClick={editPassword}>修改</button>
                </div>
                <div className={style.btn_container}>
                    <button className={style.cancel_btn} onClick={closeDialog}>取消</button>
                </div>
            </div>
        </div>
    );

    const checkType = () => {
        switch (props.editType) {
            case 'email':
                return setContent(editEmailView);
            case 'name':
                return setContent(editNameView);
            case 'pwd':
                return setContent(confirmOldPasswordView);
            default:
        }
    }

    useEffect(() => {
        if(newPassword.current!==undefined){
            if(newPassword.current!== null){
                newPassword.current.value =""
            }
        }

    });

    return (
        props.isShowDialog ?
            (<div id={style.editDialog}>
                <div className={style.container}>
                    {isSuccess ? successView :
                        props.editType === "email" ? editEmailView :
                            props.editType === "name" ? editNameView :
                                props.editType === "pwd" && pwdStep2 ? editPasswordView :
                                    confirmOldPasswordView}
                </div>
            </div >) : null


    )
}

export default EditDialog