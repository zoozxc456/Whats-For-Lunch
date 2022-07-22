import style from "./EditDialog.module.scss"

const EditSuccessDialog = ({closeDialogHandler}) => {
    return (
        <div id={style.editDialog}>
            <div className={style.container}>
                <div className={style.dialog}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>修改成功!</div>
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn} onClick={closeDialogHandler}>關閉</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSuccessDialog;