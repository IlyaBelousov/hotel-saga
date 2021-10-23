import React from 'react';
import s from './HotelRow.module.css'
import house from '../../../assets/images/house.png'
import heart from '../../../assets/images/heart.png'

export const HotelRow = () => {
    return <div className={s.rowWrapper}>
        <div className={s.hotelImage}>
            <div className={s.ellipse}>
                <img src={house} alt="house"/>
            </div>
        </div>
        <div className={s.descriptionContainer}>
            <div className={s.hotelDescription}>
            <span className={s.hotelName}>
                Moscow grand hotel
            </span>
                <span className={s.dateCountDays}>
                sdsdsdsdsds
            </span>
                <div className={s.stars}>
                    stars
                </div>

            </div>
            <div className={s.hotelPrice}>
                <div className={s.heart}>
                    <img src={heart} alt="heart"/>
                </div>
                <div className={s.price}>
                    <span className={s.pDescription}>Price:</span><span className={s.priceCount}> 24000</span>
                </div>
            </div>

        </div>

    </div>
};

