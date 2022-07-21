import HomeLayout from "../UserLayouts/Home.layout";
import write from "../../Assets/images/write.png"
import style from "./ProfilePage.module.scss"
import EditDialog from "./EditDialog";
import { useState } from "react";
const Profile = () => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [editType, setEditType] = useState("");
    const editHandlers = {
        email: () => { setIsShowDialog(true); setEditType("email"); },
        name: () => { setIsShowDialog(true); setEditType("name"); },
        password: () => { setIsShowDialog(true); setEditType("pwd"); },
        closeDialog: () => { setEditType(""); setIsShowDialog(false); }
    }
    const closeDialog = () => {
        setIsShowDialog(false)
    }
    const view = (
        <div id={style.profile}>

            <div className={style.container}>
                <div className={style.header}><div>個人資料 Profile</div></div>
                <div className={style.body}>
                    <div className={style.email_container}>
                        <div className={style.title}>電子郵件</div>
                        <div>t@t.com</div>
                        <div className={style.image} onClick={editHandlers.email} ><img src={write} alt="edit" /></div>
                    </div>
                    <div className={style.name_container}>
                        <div className={style.title}>真實姓名</div>
                        <div>使用者</div>
                        <div className={style.image} onClick={editHandlers.name}><img src={write} alt="edit" /></div>
                    </div>
                    <div className={style.password_container}>
                        <div className={style.title}>密碼</div>
                        <div><button onClick={editHandlers.password}>變更密碼</button></div>
                    </div>
                </div>

            </div>
        </div>
    )
    return <>
        <EditDialog
           isShowDialog={isShowDialog}
           editType={editType}
           closeDialog={closeDialog}
        />
        <HomeLayout childComponent={view} />
    </>
}

export default Profile;