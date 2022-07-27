import { useState } from "react";
import style from "../AccountPage/EditProfileDialogs/EditDialog.module.scss";
import icon from "../../Assets/images/logo.png"
const LogoutDialog = ({closeDialog}) => {
    const [closingStyle,setClosingStyle]=useState(false)

    const cancel = () => {
        setClosingStyle(true)
        setTimeout(() => {
            closeDialog()
        }, 800);
    }
    
    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = "/"
    }
    return (
        <div id={style.editDialog} className={`${closingStyle?style.editDialog_closing:""}`}>
            <div className={style.container}>
                <div className={`${style.dialog} ${closingStyle?style.dialog_closing:""}`}>
                   
                    <div className={style.dialog_body}>
                        <div className={style.title}>確定要登出嗎？</div>
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={logout}>確定</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={cancel}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LogoutDialog