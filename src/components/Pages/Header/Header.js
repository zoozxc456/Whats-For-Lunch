import banner from '../../Assets/images/banner.png';

import { Row, Col } from "react-bootstrap";
import './Header.css';

const Header = (props) => {
    const handleLogInClick = event => {
        window.location.href = "/"
    }
    return (
        <div id="header" onClick={handleLogInClick} >
            <Row>
                <Col>
                    <img src={banner} className={`logo2`} alt="logo" />
                </Col>
            </Row>
        </div>
    )
}

export default Header;