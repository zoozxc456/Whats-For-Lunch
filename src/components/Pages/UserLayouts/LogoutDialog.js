import { useState } from "react";
import style from "./LogoutDialog.module.scss";

const LogoutDialog = () => {
    

    const closeDialog = () => {

    }

    return (
        <div id={style.editDialog} className={``}>
            <div className={style.container}>
                <div className={`${style.dialog}`}>
                    <div className={style.dialog_body}>
                        <div className={style.title}>確定要登出嗎？</div>
                    </div>
                    <div className={style.dialog_footer}>
                        <div className={style.btn_container}>
                            <button>確定</button>
                        </div>
                        <div className={style.btn_container}>
                            <button className={style.cancel_btn}>取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LogoutDialog;