import style from "./EditDialog.module.scss"
import { useState } from "react"
const EditSuccessDialog = ({closeDialogHandler}) => {
    const [closingStyle,setClosingStyle]=useState(false)

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
                        <div className={style.title}>修改成功!</div>
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={handleCloseDialog}>關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSuccessDialog;