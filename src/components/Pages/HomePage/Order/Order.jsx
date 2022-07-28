import style from "./Order.module.scss"
import { useState } from "react";
const Order = () => {

    return (
        <div id={style.order}>
            <div className={style.start}>
                <div className={style.title}>揪團中</div>
                <div className={style.orders}>
                    <div className={style.order_ing}>
                        <div className={style.item}>
                            <div className={style.item}>
                                午餐吃火雞肉飯
                            </div>
                            <div className={style.item}>
                                外送低消300
                            </div>
                        </div>
                        <div className={style.item}>店家：黎明路火雞肉飯</div>
                        <div className={style.item}>主揪：使用者2</div>
                        <div className={style.item}>
                            <div className={style.item}>
                                備註：
                            </div>
                            <div className={style.item}>
                                查看
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.end}>
                <div className={style.title}>已結單</div>
                <div>1234</div>
            </div>
        </div>
    )
}
export default Order;