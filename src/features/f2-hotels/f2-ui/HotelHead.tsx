import React from 'react';
import s from './HotelHead.module.css'
import vector from '../../../assets/images/Vector.png'


const HotelHead = () => {
    return <div className={s.wrapper}>
        <div className={s.text}>
            <span>Отели </span><img src={vector} alt="arrow"/> <span>Москва</span>
        </div>
        <div className={s.date}>

        </div>
    </div>
};

export default HotelHead;