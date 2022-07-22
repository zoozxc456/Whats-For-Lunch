import style from "./EditDialog.module.scss"
import { useRef,useState } from "react";

const ConfirmOldPasswordDialog = ({ confirmOldPasswordHandler, closeDialogHandler }) => {
    const oldPassword = useRef("");
    const [closingStyle,setClosingStyle]=useState(false)

    const checkOldPasswordValue = () => {
        const oldPasswordValue = oldPassword.current?.value ?? "";
        const isEmptyOldPassword = oldPasswordValue === "";
        if (isEmptyOldPassword) {
          // To-Do 
          // Implement Empty Old Password Exception Handler

        } else {
            confirmOldPasswordHandler(oldPasswordValue);
        }
    }

    const handleCloseDialog=()=>{
        setClosingStyle(true)
        setTimeout(() => {
            closeDialogHandler()
        }, 800);
    }

    return (
        <div id={style.editDialog} className={`${closingStyle?style.editDialog_closing:""}`}>
            <div className={style.container}>
                <div className={`${style.dialog} ${closingStyle?style.dialog_closing:""}`}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>確認身份</div>
                        <input type={"password"} placeholder={"請輸入舊密碼"} ref={oldPassword} />
                    </div>

                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkOldPasswordValue}>確認</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={handleCloseDialog}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOldPasswordDialog;