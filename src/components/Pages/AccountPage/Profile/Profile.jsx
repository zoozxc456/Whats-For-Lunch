import style from "./Profile.module.scss"
import write from "../../../Assets/images/write.png";
import { useState, useEffect } from "react"
import axios from "axios";
const Profile = ({ editHandlers }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const getProfileData = () => {
        const accessToken = localStorage.getItem("accessToken")
        const headers = { headers: { authorization: `Bearer ${accessToken}` } }
        return axios.get(`${process.env.REACT_APP_API_ROOT}/user/profile`, headers)
            .then((res) => {
                const res_email = res.data?.payload?.email;
                const res_username = res.data?.payload?.username;
                return { res_email, res_username };
            }).catch((err) => {
                console.log(err)
                return undefined;
            })
    }

    useEffect(() => {
        getProfileData()
            .then(res => {
                const { res_email, res_username } = res;
                if (res_email && res_username) {
                    setEmail(res_email);
                    setUsername(res_username);
                }
            })
    }, []);
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div>個人資料 Profile</div>
            </div>
            <div className={style.body}>
                <div className={style.form_container}>
                    <div className={style.title}>電子郵件</div>
                    <div className={style.content}>{email}</div>
                    <div className={style.image} onClick={editHandlers.email} >
                        <img src={write} alt="edit" />
                    </div>
                </div>
                <div className={style.form_container}>
                    <div className={style.title}>真實姓名</div>
                    <div className={style.content}>
                        <div>{username}</div>
                    </div>
                    <div className={style.image} onClick={editHandlers.username} >
                        <img src={write} alt="edit" />
                    </div>
                </div>
                <div className={style.form_container}>
                    <div className={style.title}>密碼</div>
                    <div className={style.content}>
                        <button onClick={editHandlers.password}>變更密碼</button>
                    </div>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;