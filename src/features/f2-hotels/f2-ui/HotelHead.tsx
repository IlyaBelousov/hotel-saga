import React from 'react';
import s from './HotelHead.module.css'
import vector from '../../../assets/images/common-images/Vector.png'

type HotelHeadPropsType = {
    location: string
    date: string
}
const HotelHead = (props: HotelHeadPropsType) => {
    return <div className={s.wrapper}>
        <div className={s.text}>
            <span>Отели </span><img src={vector} alt="arrow"/> <span>{props.location}</span>
        </div>
        <div className={s.date}>
            {props.date}
        </div>
    </div>
};

export default HotelHead;