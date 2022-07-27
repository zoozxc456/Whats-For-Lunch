import style from "./Notify.module.scss"
import write from "../../../Assets/images/write.png";
import { useState, useEffect } from "react"
import axios from "axios";
const Notify = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const getAccountData = () => {
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
        // getAccountData()
        //     .then(res => {
        //         const { res_email, res_username } = res;
        //         if (res_email && res_username) {
        //             setEmail(res_email);
        //             setUsername(res_username);
        //         }
        //     })
    }, []);
    return (
        <div className={style.container}>
            <div className={`${style.read} ${style.has_unread}`}>全部已讀</div>
            <div className={style.content}>

                {Array.from("1234567890wedasdsadkjasdrtyui").map((e, i) => (
                    <div className={`${style.notify_box} ${i===0?style.unread:""}`} key={i}>
                        <div className={style.notify} >
                            <div className={style.subject}>
                                <div className={style.title}>0713訂飲料</div>
                                <div className={style.status}>揪團活動已結束</div>
                            </div>
                            <div className={style.info}>
                                <div>瑪麗安社畜</div>
                                <div>2022/07/13 13:30</div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    )
}

export default Notify;