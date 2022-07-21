import "./LineLoginButton.css"
// import LineIcon from "../../Assets/images/Line-Icon.svg";
import { Button } from "react-bootstrap";

const LineLoginButtonView = ({onClickHandler}) => (
    <Button id="LineLoginBtn" onClick={onClickHandler}>
        <div id="iconDiv">
            {/* <img alt="LineIcon" src={LineIcon} /> */}
        </div>
        <div id="textDiv">
            Login With LINE
        </div>
    </Button>
)

export default LineLoginButtonView