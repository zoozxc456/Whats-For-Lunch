import Plus from '../../../Assets/images/plus.png';
import style from './CreateDialogs.module.scss';
import { useState, useEffect } from 'react';
// import { Col, Row, Button } from "react-bootstrap";

const CreateDialogBtn = ({ componentType }) => {
    const [component, setComponent] = useState("");
    const [isShowBtn, setIsShowBtn] = useState(true);

    useEffect(() => {
        // console.log(componentType.type)
        if (componentType.type === "Order") {
            setComponent("新增揪團活動！")
            setIsShowBtn(true)
        } else if (componentType.type === "Store") {
            setComponent("新增店家菜單！")
            setIsShowBtn(true)
        } else if (componentType.type === "Group") {
            setComponent("新增群組！")
            setIsShowBtn(true)
        } else if (componentType.type === "Record") {
            setComponent("")
            setIsShowBtn(false)
        }
    }, [componentType]);
    return (
        <div id={style.create_btn} className={isShowBtn ? "" : style.hidden}>
            <div className={style.circle}>
                <img src={Plus} className="" alt="Plus" style={{ width: '27px' }} />

                <div className={style.test}>
                    <div>
                        <span className={style.tooltiptext}>{component}</span>
                        <div></div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CreateDialogBtn;
