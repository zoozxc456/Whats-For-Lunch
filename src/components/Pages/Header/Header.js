import banner from '../../Assets/images/banner.png';
// import { Row, Col } from "react-bootstrap";
import style from './Header.module.scss';

const Header = (props) => {
    const handleLogInClick = event => {
        window.location.href = "/"
    }
    return (
        <div id={style.header} onClick={handleLogInClick} >
            <img src={banner} className={style.banner} alt="logo" />
        </div>
    )
}

export default Header;