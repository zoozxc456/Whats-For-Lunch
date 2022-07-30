import style from './Store.module.scss'
import option from '../../../Assets/images/option.png'

const Store = () => {

    return (
        <div id={style.store}>
            <div className={style.function_bar}>
                <div className={style.tags}>
                    <div className={`${style.tag} ${style.active}`}>全部</div>
                    <div className={style.tag}>飲料</div>
                    <div className={style.tag}>便當</div>
                    <div className={style.tag}>泰式料理</div>
                    <div className={style.tag}>便當1</div>
                    <div className={style.tag}>飲料</div>
                    <div className={style.tag}>便當2</div>
                    <div className={style.tag}>飲料</div>
                    <div className={style.tag}>便當3</div>
                    <div className={style.tag}>日式料理</div>
                    <div className={style.tag}>便當</div>
                    <div className={style.tag}>垃圾食物</div>
                    <div className={style.tag}>Rice</div>
                    <div className={style.tag}>可不可</div>
                    <div className={style.tag}>便當便當便當便當便當</div>
                </div>
                <div className={style.share}>
                    接收店家資訊
                    <label className={style.switch}>
                        <input type="checkbox" />
                        <span className={`${style.slider} ${style.round}`}></span>
                    </label>
                </div>
            </div>
            <div className={style.stores}>
                {/* 店家 */}
                <div className={style.store}>
                    {/* top */}
                    <div className={style.background}>
                        {/* image */}
                    </div>

                    {/* bottom */}
                    <div className={style.details}>
                        <div  className={style.row1}>
                            <div className={style.name}>
                                麥當勞
                            </div>
                            <div className={style.option}>
                                <img src={option} alt="option" />
                            </div>
                        </div>
                        <div className={style.row2}>
                            上次更新：1個月前
                        </div>
                    </div>
                </div>

                <div className={style.store}>
                    {/* top */}
                    <div className={style.background}>
                        {/* image */}
                    </div>

                    {/* bottom */}
                    <div className={style.details}>
                        <div  className={style.row1}>
                            <div className={style.name}>
                                麥當勞
                            </div>
                            <div className={style.option}>
                                <img src={option} alt="option" />
                            </div>
                        </div>
                        <div className={style.row2}>
                            上次更新：1個月前
                        </div>
                    </div>
                </div>
                <div className={style.store}>
                    {/* top */}
                    <div className={style.background}>
                        {/* image */}
                    </div>

                    {/* bottom */}
                    <div className={style.details}>
                        <div  className={style.row1}>
                            <div className={style.name}>
                                麥當勞
                            </div>
                            <div className={style.option}>
                                <img src={option} alt="option" />
                            </div>
                        </div>
                        <div className={style.row2}>
                            上次更新：1個月前
                        </div>
                    </div>
                </div>
                <div className={style.store}>
                    {/* top */}
                    <div className={style.background}>
                        {/* image */}
                    </div>

                    {/* bottom */}
                    <div className={style.details}>
                        <div  className={style.row1}>
                            <div className={style.name}>
                                麥當勞
                            </div>
                            <div className={style.option}>
                                <img src={option} alt="option" />
                            </div>
                        </div>
                        <div className={style.row2}>
                            上次更新：1個月前
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Store