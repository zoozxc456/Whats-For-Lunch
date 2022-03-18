import notification from '../../Assets/images/notification.png';
import notification2 from '../../Assets/images/notification2.png';
import './Notify.css';
import React, { useState } from 'react';
import { Col, Row, Button } from "react-bootstrap";



const NotifyComponent = () => {
    const [height, setHeight] = useState('60px');
    const [width, setWidth] = useState('60px');
    const [radius, setRadius] = useState('50px');
    const changeSize = () => {
        console.log('clicked')
        setHeight('50vh')
        setWidth('300px')
        setRadius('10px')
    }
    const changeSize2 = () => {
        console.log('clicked')
        setHeight('60px')
        setWidth('60px')
        setRadius('50px')
    }
    return (

        <div id="notify" className='' style={{height:height,width:width,borderRadius:radius}} onClick={changeSize} onMouseLeave={changeSize2}>
            <div className='title p-2'>
                {/* 通知 */}
                <img src={notification} className="" alt="notification" style={{ width: '35px' }} />
            </div>
            <div>

            </div>
        </div>
    );
}

export default NotifyComponent;
