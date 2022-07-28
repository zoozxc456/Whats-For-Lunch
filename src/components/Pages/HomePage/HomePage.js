import UserLayout from "../UserLayouts/User.layout"
import style from "./HomePage.module.scss"
// import { Col, Row } from "react-bootstrap"
import { useState,useEffect } from "react";
import Notify from '../Notify/Notify';
import Order from './Order/Order';
// import Store from './Store/Store';
// import Group from './Group/Group';
// import Record from './Record/Record';

const HomePage = () => {
    const [component, setComponent] = useState({ type: "", content: null });

    const clickSubFeatureHandlers = {
        order: () => {
            setComponent({
                type: "Order",
                content: <Order />
            })
        },
        store: () => {
            setComponent({
                type: "Store",
                // content: <Store />
            })
        },
        group: () => {
            setComponent({
                type: "Group",
                // content: <Group />
            })
        },
        record: () => {
            setComponent({
                type: "Record",
                // content: <Record />
            })
        },
    }

    const getSubFeatureStyle = (subFeature) => {
        if (component.type === subFeature) {
            return `${style.item} ${style.active}`
        } else {
            return `${style.item}`
        }
    }
    const getLineStyle = () => {
        if (component.type === "Order") {
            return `${style.line} ${style.lv1}`
        } else if (component.type === "Store") {
            return `${style.line} ${style.lv2}`
        } else if (component.type === "Group") {
            return `${style.line} ${style.lv3}`
        } else if (component.type === "Record") {
            return `${style.line} ${style.lv4}`
        } else {
            return `${style.line} `
        }
    }
    useEffect(() => {
        if (component.content === null) {
            setComponent({
                type: "Order",
                content: <Order />
            })
        }
    }, [component]);

    const view = (
        <div id={style.home}>
            <div id={style.sub_feature}>
                <div className={getSubFeatureStyle("Order")}
                    onClick={clickSubFeatureHandlers.order} >
                    訂餐
                </div>
                <div className={getSubFeatureStyle("Store")}
                    onClick={clickSubFeatureHandlers.store}>
                    店家
                </div>
                <div className={getSubFeatureStyle("Group")}
                    onClick={clickSubFeatureHandlers.group}>
                    群組
                </div>
                <div className={getSubFeatureStyle("Record")}
                    onClick={clickSubFeatureHandlers.record}>
                    紀錄
                </div>
                <div className={getLineStyle()}></div>
            </div>
            {component.content}

        </div>
    )

    return (
        <>
            <Notify/>
            <UserLayout currentPage={"home"} childComponent={view} />
        </>
    )
}

export default HomePage;