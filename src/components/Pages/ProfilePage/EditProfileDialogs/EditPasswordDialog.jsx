import style from "./EditDialog.module.scss"
import { useRef } from "react"
import { passwordIsMeetRule } from "../../../../utils/meetRule";

const EditPasswordDialog = ({ closeDialogHandler, editNewPasswordHandler }) => {
    const newPassword = useRef("");
    const confirmNewPassword = useRef("");

    const checkNewPasswordValue = () => {
        const newPasswordValue = newPassword.current?.value ?? "";
        const confirmNewPasswordValue = confirmNewPassword.current?.value ?? "";
        const isSamePassword = newPasswordValue === confirmNewPasswordValue;
        if (isSamePassword){
            const isMeetRule = passwordIsMeetRule(newPasswordValue);
            if(isMeetRule){
                editNewPasswordHandler(newPasswordValue)
            }else{
                // To-Do
                // Implement New Password Is Not Meet Rule Exception Handler
            }
        }else{
            // To-Do
            // Implement New Password Is Not Same As Confirm New Password
        }
    }
    return (
        <div id={style.editDialog}>
            <div className={style.container}>
                <div className={`${style.dialog} ${style.pwd_dialog}`}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>修改密碼</div>
                        <input type={"password"} placeholder={"請輸入新密碼"} ref={newPassword} />
                        <div className={style.title}>確認密碼</div>
                        <input type={"password"} placeholder={"請再次輸入新密碼"} ref={confirmNewPassword} />
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkNewPasswordValue}>修改</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={closeDialogHandler}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPasswordDialog;