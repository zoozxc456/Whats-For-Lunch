import style from "./EditDialog.module.scss"
import { useRef } from "react";

const ConfirmOldPasswordDialog = ({ confirmOldPasswordHandler, closeDialogHandler }) => {
    const oldPassword = useRef("");

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

    return (
        <div id={style.editDialog}>
            <div className={style.container}>
                <div className={`${style.dialog}`}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>確認身份</div>
                        <input type={"password"} placeholder={"請輸入舊密碼"} ref={oldPassword} />
                    </div>

                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkOldPasswordValue}>確認</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={closeDialogHandler}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOldPasswordDialog;