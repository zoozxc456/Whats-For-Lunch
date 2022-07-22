import style from "./EditDialog.module.scss"
import { useRef,useState } from "react"
const EditNameDialog = ({ closeDialogHandler, editNewNameHandler }) => {
    const newName = useRef("");
    const [closingStyle,setClosingStyle]=useState(false)

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
                        <div className={style.title}>修改真實姓名</div>
                        <input type={"text"} placeholder={"請輸入真實姓名"} ref={newName} />
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button onClick={checkNewNameValue}>修改</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={handleCloseDialog}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditNameDialog