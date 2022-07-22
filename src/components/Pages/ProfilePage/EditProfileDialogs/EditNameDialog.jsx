import style from "./EditDialog.module.scss"
import { useRef } from "react"
const EditNameDialog = ({ closeDialogHandler, editNewNameHandler }) => {
    const newName = useRef("");

    const checkNewNameValue = () => {
        const nameValue = newName.current?.value ?? "";
        const isEmptyName = nameValue === "";
        if (isEmptyName) {
            // To-Do 
            // Implement Empty New Name Exception Handler
        } else {
            editNewNameHandler(nameValue);
        }
    }

    return (
        <div id={style.editDialog}>
            <div className={style.container}>
                <div className={style.dialog}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>修改真實姓名</div>
                        <input type={"text"} placeholder={"請輸入真實姓名"} ref={newName} />
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkNewNameValue}>修改</button>
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

export default EditNameDialog