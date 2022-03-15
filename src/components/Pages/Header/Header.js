import logo2 from '../../Assets/images/logo2.png';

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
                    <img src={logo2} className={`logo2`} alt="logo" />
                </Col>
            </Row>
        </div>
    )
}

export default Header;