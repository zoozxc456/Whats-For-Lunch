import { Row, Col } from "react-bootstrap"
import style from "./Home.layout.module.scss"
import logo from "../../Assets/images/logo.png"
import notification from "../../Assets/images/notification.png"
import pizza from "../../Assets/images/pizza-w.png"
import rice from "../../Assets/images/rice-w.png"
import more from "../../Assets/images/more.png"
import banner from "../../Assets/images/banner.png"
import { useState, useEffect } from "react"
const HomeLayout = ({ currentPage, childComponent }) => {
    const [mobileNavStatus, setMobileNavStatus] = useState("init");
    const [isShowMobileNav, setShowMobileNav] = useState(false);
    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = "/"
    }

    const handleBurgerMenu = () => {
        console.log(mobileNavStatus)
        setMobileNavStatus(mobileNavStatus === "open" ? "closing" : "open");
    }
    const redirectHandlers = {
        group: () => window.location.href = "/home",
        record: () => window.location.href = "/record",
        profile: () => window.location.href = "/profile"
    }
    const handleRedirect = (targetPage) => {
        console.log(targetPage)
        if (targetPage === "group") {
            window.location.href = "/home";
        } else if (targetPage === "record") {
            window.location.href = "/record";
        } else if (targetPage === "profile") {
            window.location.href = "/profile";
        }
        // switch (targetPage) {
        //     case "group":
        //         window.location.href = "/home";
        //         break;
        //     case "record":
        //         window.location.href = "/record";
        //         break;
        //     case "profile":
        //         window.location.href = "/profile";
        //         break;
        //     default:
        //         return;

    }

    useEffect(() => {
        if (mobileNavStatus === "closing") {
            const timer = setTimeout(() => {
                setMobileNavStatus("init");
            }, 1000)
            return () => clearTimeout(timer);
        }

    }, [mobileNavStatus])


    return (
        <>
            <div id={style.header}>
                <div className={style.mobile}>
                    <div className={style.burgerMenuIcon} onClick={handleBurgerMenu}>
                        <img src={more} alt="logo" />
                    </div>
                    <div className={style.banner}>
                        <img src={banner} alt="" />
                    </div>
                    <div className={style.notify}>
                        <img src={notification} alt="logo" />
                    </div>
                </div>
                <div className={style.desktop}>
                    <div className={style.icon}><img src={logo} alt="logo" /></div>
                    <div className={style.title}>What's For Lunch?</div>
                    <div className={style.features}>
                        <div className={style.notify}><img src={notification} alt="logo" /></div>
                    </div>
                </div>

            </div>
            <Row id={style.content} className={mobileNavStatus === "open" ? style.mobile_mask : ""}>
                <Col
                    id={style.navBar}
                    className={
                        mobileNavStatus === "open" ? style.active :
                            mobileNavStatus === "closing" ? style.closing : ""
                    }
                    xs={12} md={3} xl={2} style={{ "padding": "0" }}
                >
                    <div className={style.menu}>
                        <div
                            className={`${style.menu_item} ${currentPage === "group" ? style.active : ""}`}
                            onClick={redirectHandlers.group}
                        >
                            <div>我的群組</div>
                        </div>
                        <div
                            className={`${style.menu_item} ${currentPage === "record" ? style.active : ""}`}
                            onClick={redirectHandlers.record}>
                            <div>訂餐紀錄</div>
                        </div>
                        <div
                            className={`${style.menu_item} ${currentPage === "profile" ? style.active : ""}`}
                            onClick={redirectHandlers.profile}>
                            <div>個人資料</div>
                        </div>
                        <div className={`${style.menu_item}`} onClick={logout}>
                            <div>登出</div>
                        </div>
                    </div>
                    <div className={`${style.image} ${style.pizza}`}>
                        <img src={pizza} alt="pizza" />
                    </div>
                    <div className={`${style.image} ${style.rice}`}>
                        <img src={rice} alt="rice" />
                    </div>
                </Col>
                <Col
                    xs={12} md={9} xl={10}
                    style={{ "padding": "0" ,"display":"flex","flexDirection":"column"}}
                    className={mobileNavStatus === "open" ? style.blurContent : ""}
                >
                    <div id={style.sub_feature}>
                        <div className={`${style.item} ${style.active}`}>帳戶</div>
                        <div className={style.item}>通知</div>
                        <div className={style.item}>錢包</div>
                        <div className={`${style.line} ${style.lv1}`}></div>
                    </div>
                    <div className={style.child}>
                        {childComponent}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HomeLayout;