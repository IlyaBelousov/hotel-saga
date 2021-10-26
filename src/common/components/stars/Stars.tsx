import React from 'react';
import s from './Stars.module.css'
import emptyStar from '../../../assets/images/hotel-images/VectorStar.png'
import goldStar from '../../../assets/images/hotel-images/VectorStarGold.png'

type StarPropsType = {
    count: number
}

export const Stars = (props:StarPropsType) => {
    return <div className={s.stars}>
        <img src={props.count>0?goldStar:emptyStar} alt="star"/>
        <img src={props.count>1?goldStar:emptyStar} alt="star"/>
        <img src={props.count>2?goldStar:emptyStar} alt="star"/>
        <img src={props.count>3?goldStar:emptyStar} alt="star"/>
        <img src={props.count>4?goldStar:emptyStar} alt="star"/>
    </div>
};

