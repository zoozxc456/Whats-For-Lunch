import logo from '../../Assets/images/logo.png';
import './Notify.css';
import React, { useState } from 'react';
import { Col, Row, Button } from "react-bootstrap";



const NotifyComponent = () => {
    const [height, setHeight] = useState('60px');

    const changeHeight = () => {
        console.log('clicked')
        setHeight('600px')
    }
    return (

        <div id="notify" className='' style={{height:height}} onClick={changeHeight}>
            <div className='title p-2'>
                {/* 通知 */}
                <img src={logo} className="" alt="line" style={{ width: '35px' }} />
            </div>
            <div>

            </div>
        </div>
    );
}

export default NotifyComponent;
