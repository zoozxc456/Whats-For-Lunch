import style from "./EditDialog.module.scss"
import { useRef } from "react"
import { emailIsMeetRule } from "../../../../utils/meetRule";
const EditEmailDialog = ({ closeDialogHandler, editNewEmailHandler }) => {
    const newEmail = useRef("");
    const checkNewEmailValue = () => {
        const emailValue = newEmail.current?.value ?? "";
        const isEmptyEmail = emailValue === "";
        if (isEmptyEmail) {
            // To-Do 
            // Implement Empty New Email Exception Handler
        } else {
            const isMeetRule = emailIsMeetRule(emailValue);
            if (isMeetRule) {
                editNewEmailHandler(emailValue);
            } else {
                // To-Do
                // Implement New Email Is Not Meet Rule Exception Handler
            }
        }
    }

    return (
        <div id={style.editDialog}>
            <div className={style.container}>
                <div className={style.dialog}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>修改電子郵件</div>
                        <input type={"email"} placeholder={"請輸入電子郵件"} ref={newEmail} />
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkNewEmailValue}>修改</button>
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

export default EditEmailDialog