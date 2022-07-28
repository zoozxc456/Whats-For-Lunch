import style from "./Order.module.scss"
// import { useState, useEffect } from "react";
const Order = () => {

    return (
        <div id={style.order}>
            <div className={style.start}>
                <div className={style.title}>揪團中</div>
                <div className={style.orders}>
                    <div className={style.order_ing}>

                        <div className={style.row}>
                            <div className={style.item_left}>午餐吃火雞肉飯</div>
                            <div className={style.item_right}>外送低消300</div>
                        </div>

                        <div className={style.item}>店家：黎明路火雞肉飯</div>

                        <div className={style.row}>
                            <div className={style.item_left}>主揪：使用者2</div>
                            <div className={style.item_right}>
                                <div className={style.timer}>00:03:17</div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.item_left}>備註：未說一律大份</div>
                            <div className={style.item_right}>
                                <button>跟團</button>
                            </div>
                        </div>

                    </div>

                    <div className={style.order_ing}>

                        <div className={style.row}>
                            <div className={style.item_left}>午餐麥當勞~</div>
                            <div className={style.item_right}>無低消</div>
                        </div>

                        <div className={style.item}>店家：麥當勞</div>

                        <div className={style.row}>
                            <div className={style.item_left}>主揪：廖建榕</div>
                            <div className={style.item_right}>
                                <div className={style.timer}>00:00:04</div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.item_left}>備註：</div>
                            <div className={style.item_right}>
                                <button>編輯</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.end}>
                <div className={style.title}>已結單</div>
                <div className={style.orders}>
                    <div className={style.order_end}>

                        <div className={style.row}>
                            <div className={style.item_left}>午餐麥當勞~</div>
                            <div className={style.item_right}>無低消</div>
                        </div>

                        <div className={style.item}>店家：麥當勞</div>

                        <div className={style.row}>
                            <div className={style.item_left}>主揪：廖建榕</div>
                            <div className={style.item_right}>
                                <div className={style.timer}>00:00:00</div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.item_left}>備註：</div>
                            <div className={style.item_right}>
                                <button>查看</button>
                            </div>
                        </div>

                    </div>

                    <div className={style.order_end}>

                        <div className={style.row}>
                            <div className={style.item_left}>午餐麥當勞~</div>
                            <div className={style.item_right}>無低消</div>
                        </div>

                        <div className={style.item}>店家：麥當勞</div>

                        <div className={style.row}>
                            <div className={style.item_left}>主揪：廖建榕</div>
                            <div className={style.item_right}>
                                <div className={style.timer}>00:00:00</div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <div className={style.item_left}>備註：</div>
                            <div className={style.item_right}>
                                <button>查看</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Order;