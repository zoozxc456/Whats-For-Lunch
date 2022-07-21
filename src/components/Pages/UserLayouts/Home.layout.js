import { Row, Col } from "react-bootstrap"
import style from "./Home.layout.module.scss"
import logo from "../../Assets/images/logo.png"
import notification from "../../Assets/images/notification.png"
import pizza from "../../Assets/images/pizza-w.png"
import rice from "../../Assets/images/rice-w.png"

const HomeLayout = ({ childComponent }) => {
    const logout = () => {
        localStorage.removeItem("accessToken")
        window.location.href = "/"
    }

    return (
        <>
            <div id={style.header}>
                <div className={style.main_title}>
                    <div className={style.icon}><img src={logo} alt="logo" /></div>
                    <div className={style.title}>What's For Lunch</div>
                </div>
                <div className={style.features}>
                    <div className={style.notify}><img src={notification} alt="logo" /></div>
                </div>
            </div>
            <div id={style.content}>
                <Row >
                    <Col md={2} style={{ "padding": "0" }}>
                        <div id={style.navBar}>
                            <div className={style.menu}>
                                <div className={`${style.menu_item} ${style.active}`}>我的群組</div>
                                <div className={`${style.menu_item}`}>訂餐紀錄</div>
                                <div className={`${style.menu_item}`}>個人資料</div>
                                <div className={`${style.menu_item}`} onClick={logout}>登出</div>
                            </div>
                            <div className={style.images}>
                                <div className={`${style.image} ${style.pizza}`}>
                                    <img src={pizza} alt="pizza" />
                                </div>
                                <div className={`${style.image} ${style.rice}`}>
                                    <img src={rice} alt="rice" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ "padding": "0" }}>
                        {childComponent}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HomeLayout;