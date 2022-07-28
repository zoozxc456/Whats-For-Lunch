import UserLayout from "../UserLayouts/User.layout";
import style from "./AccountPage.module.scss"
import EditDialog from "./EditProfileDialogs/EditDialog";
import Profile from "./Profile/Profile";
import Notify from "./Notify/Notify";
import Wallet from "./Wallet/Wallet";
import { useState, useEffect } from "react";
const AccountPage = () => {
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [editType, setEditType] = useState("");

    const [component, setComponent] = useState({ type: "", content: null });

    const editHandlers = {
        email: () => { setIsShowDialog(true); setEditType("email"); },
        name: () => { setIsShowDialog(true); setEditType("name"); },
        password: () => { setIsShowDialog(true); setEditType("pwd"); },
        closeDialog: () => { setEditType(""); setIsShowDialog(false); }
    }

    const clickSubFeatureHandlers = {
        profile: () => {
            setComponent({
                type: "Profile",
                content: <Profile editHandlers={editHandlers} />
            })
        },
        notify: () => {
            setComponent({
                type: "Notify",
                content: <Notify />
            })
        }, wallet: () => {
            setComponent({
                type: "Wallet",
                content: <Wallet />
            })
        }
    }

    const getSubFeatureStyle = (subFeature) => {
        if (component.type === subFeature) {
            return `${style.item} ${style.active}`
        } else {
            return `${style.item}`
        }
    }
    const getLineStyle = () => {
        if (component.type === "Profile") {
            return `${style.line} ${style.lv1}`
        }else if (component.type === "Notify") {
            return `${style.line} ${style.lv2}`
        }else if (component.type === "Wallet") {
            return `${style.line} ${style.lv3}`
        }else {
            return `${style.line} `
        }
    }

    const closeDialog = () => {
        setIsShowDialog(false)
    }
    useEffect(() => {
        if (component.content === null) {
            setComponent({
                type: "Profile",
                content: <Profile editHandlers={editHandlers} />
            })
        }
    }, [component]);
    const view = (
        <div id={style.profile}>
            <div id={style.sub_feature}>
                <div className={getSubFeatureStyle("Profile")}
                    onClick={clickSubFeatureHandlers.profile} >
                    帳戶
                </div>
                <div className={getSubFeatureStyle("Notify")}
                    onClick={clickSubFeatureHandlers.notify}>
                    通知
                </div>
                <div className={getSubFeatureStyle("Wallet")}
                    onClick={clickSubFeatureHandlers.wallet}>
                    錢包
                </div>
                <div className={getLineStyle()}></div>
            </div>
            {component.content}

        </div>
    )
    return <>
        <EditDialog
            isShowDialog={isShowDialog}
            editType={editType}
            closeDialog={closeDialog}
        />
        <UserLayout currentPage={"account"} childComponent={view} />
    </>
}

export default AccountPage;