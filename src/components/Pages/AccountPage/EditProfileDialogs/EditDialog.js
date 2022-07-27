import axios from "axios";
import { useState, useEffect, useRef } from "react";

import EditEmailDialog from "./EditEmailDialog";
import EditNameDialog from "./EditNameDialog";
import EditPasswordDialog from "./EditPasswordDialog";
import EditSuccessDialog from "./EditSuccessDialog";
import ConfirmOldPasswordDialog from "./ConfirmOldPasswordDialog";

const EditDialog = ({ isShowDialog, editType, closeDialog }) => {
    const [dialog, setDialog] = useState(null);
    const [dataStatus, setDataStatus] = useState({
        hasConfirmOldPassword: false,
        isSuccessEdit: false
    });

    const handleCloseDialog = () => {
        closeDialog()
        setDataStatus({
            hasConfirmOldPassword: false,
            isSuccessEdit: false
        })
    }

    const handleEditEmail = (newEmail) => {
        // To-Do
        // Call Edit New Email API
    }

    const handleEditName = (newName) => {
        // To-Do
        // Call Edit New Name API
    }

    const handleConfirmOldPassword = (oldPassword) => {
        if (oldPassword !== "") {
            const accessToken = localStorage.getItem("accessToken")
            const headers = { headers: { authorization: `Bearer ${accessToken}` } }
            const payload = { "old_password": oldPassword }

            axios.post(`${process.env.REACT_APP_API_ROOT}/user/identify`, payload, headers)
                .then((res) => {
                    setDataStatus(() => ({ ...dataStatus.isSuccessEdit, hasConfirmOldPassword: true }))
                }).catch((err) => {
                    console.log(err)
                    alert("密碼錯誤")
                })
        } else {
            alert("請輸入密碼")
        }
    }

    const handleEditNewPassword = (newPassword) => {
        setDataStatus({
            ...dataStatus.hasConfirmOldPassword,
            isSuccessEdit: true
        })
    }

    const checkEditType = () => {
        if (dataStatus.isSuccessEdit) {
            return setDialog(<EditSuccessDialog closeDialogHandler={handleCloseDialog} />)
        }
        switch (editType) {
            case 'email':
                return setDialog(
                    <EditEmailDialog
                        closeDialogHandler={handleCloseDialog}
                        editNewEmailHandler={handleEditEmail}
                    />
                );
            case 'name':
                return setDialog(
                    <EditNameDialog
                        closeDialogHandler={handleCloseDialog}
                        editNewNameHandler={handleEditName}
                    />
                );
            case 'pwd':
                if (dataStatus.hasConfirmOldPassword) {
                    return setDialog(
                        <EditPasswordDialog
                            editNewPasswordHandler={handleEditNewPassword}
                            closeDialogHandler={handleCloseDialog}
                        />
                    )
                } else {
                    return setDialog(
                        <ConfirmOldPasswordDialog
                            confirmOldPasswordHandler={handleConfirmOldPassword}
                            closeDialogHandler={handleCloseDialog}
                        />
                    );
                }
            default:
                return;
        }
    }

    useEffect(() => {
        if (isShowDialog) {
            checkEditType()
        } else {
            setDialog(null)
        }

    }, [isShowDialog, dataStatus]);

    return (
        dialog
    )
}


export default EditDialog