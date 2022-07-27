import HomeLayout from "../UserLayouts/Home.layout";
import style from "./RecordPage.module.scss"
import { useState, useEffect } from "react";
const RecordPage = () => {

    const view = (
        <>
            <div className={style.content}>
                <div className={style.dropdown}>
                    {/* 下拉選單 */}
                    <select>
                        <option>篩選依據</option>
                        <option>依身份</option>
                        <option>依日期</option>
                        <option>依群組</option>
                        <option>全部</option>
                    </select>
                    <select>
                        <option>篩選項目</option>
                        <option>我是主揪</option>
                        <option>我是跟團</option>
                        <option>無</option>
                    </select>
                </div>
                <div className={style.record_list}>
                    <div className={style.records}>
                        <div className={style.date}>2022/7/24</div>
                        <div className={style.record}>
                            <div className={style.item}>麥當勞</div>
                            <div className={style.item}>廖建榕</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/7/22</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/7/21</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>

                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                    <div className={style.records}>
                        <div className={style.date}>2022/2/20</div>
                        <div className={style.record}>
                            <div className={style.item}>---</div>
                            <div className={style.item}>---</div>
                            <button>留言</button>
                        </div>
                        <div className={style.record}>
                            <div className={style.item}>可不可</div>
                            <div className={style.item}>林均蓉</div>
                            <button>留言</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    return <>
        <HomeLayout currentPage={"record"} childComponent={view} />
    </>
}
export default RecordPage;