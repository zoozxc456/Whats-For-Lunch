import Plus from '../../../Assets/images/plus.png';
import style from './CreateDialogs.module.scss';
import { useState } from 'react';
// import { Col, Row, Button } from "react-bootstrap";


const CreateDialogBtn = () => {
    return (
        <div id={style.create_btn}>
            <div className={style.circle}>
                <img src={Plus} className="" alt="Plus" style={{ width: '27px' }} />
            </div>
        </div>
    );
}

export default CreateDialogBtn;
