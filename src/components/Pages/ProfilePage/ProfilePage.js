import HomeLayout from "../UserLayouts/Home.layout";
import write from "../../Assets/images/write.png"
import style from "./ProfilePage.module.scss"
// import { EditEmailDialog } from "./EditDialog";
import EditDialog from "./EditProfileDialogs/EditDialog";
import { useState, useEffect } from "react";
import axios from "axios";
const Profile = () => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [editType, setEditType] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const editHandlers = {
        email: () => { setIsShowDialog(true); setEditType("email"); },
        name: () => { setIsShowDialog(true); setEditType("name"); },
        password: () => { setIsShowDialog(true); setEditType("pwd"); },
        closeDialog: () => { setEditType(""); setIsShowDialog(false); }
    }
    const closeDialog = () => {
        setIsShowDialog(false)
    }
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        const headers = { headers: { authorization: `Bearer ${accessToken}` } }
        axios.get(`${process.env.REACT_APP_API_ROOT}/user/profile`, headers)
        .then((res) => {
            setEmail(res.data.payload.email)
            setUsername(res.data.payload.username)
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    const view = (
        <div id={style.profile}>

            <div className={style.container}>
                <div className={style.header}><div>個人資料 Profile</div></div>
                <div className={style.body}>
                    <div className={style.form_container}>
                        <div className={style.title}>電子郵件</div>
                        <div className={style.form_content}>
                            <div className={style.content}>{email}</div>
                            <div className={style.image} onClick={editHandlers.email} >
                                <img src={write} alt="edit" />
                            </div>
                        </div>

                    </div>
                    <div className={style.form_container}>
                        <div className={style.title}>真實姓名</div>
                        <div className={style.form_content}>
                            <div className={style.content}>
                                <div>{username}</div>
                            </div>
                            <div className={style.image} onClick={editHandlers.email} >
                                <img src={write} alt="edit" />
                            </div>
                        </div>
                    </div>
                    <div className={style.form_container}>
                        <div className={style.title}>密碼</div>
                        <div className={style.form_content}>
                            <button onClick={editHandlers.password}>變更密碼</button>
                        </div>
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
        {/* <EditEmailDialog
            isShowDialog={isShowDialog}
            closeDialog={closeDialog}
        /> */}
        <HomeLayout currentPage={"profile"} childComponent={view} />
    </>
}

export default Profile;