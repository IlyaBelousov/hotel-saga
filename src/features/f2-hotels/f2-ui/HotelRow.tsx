import React from 'react';
import s from './HotelRow.module.css'

import heart from '../../../assets/images/hotel-images/heart.png'
import redHeart from '../../../assets/images/hotel-images/VectorRedHeart.png'
import {Stars} from "../../../common/components/stars/Stars";
import {useDispatch} from "react-redux";
import {followFavourite, unFollowFavourite} from "../f2-bll/hotel-reducer";

export type HotelRowPropsType = {
    hotelName: string
    date: string
    daysCount: number
    stars: number
    isFavourite: boolean
    price: number
    hotelId: number
    img?: string
    fontSize?: string
}

export const HotelRow: React.FC<HotelRowPropsType>  = React.memo(({
                                                          stars,
                                                          hotelId,
                                                          hotelName,
                                                          date,
                                                          isFavourite,
                                                          price,
                                                          daysCount,
                                                          img,
                                                          fontSize
                                                      }) => {
    let dayDescription = () => {
        if(daysCount===1) return 'день'
        if((daysCount>4&&daysCount<21)||(daysCount>24&&daysCount<31)) return 'дней'
        else return 'дня'
    }
    const dispatch = useDispatch()
    const followToFavourite = () => {
        dispatch(followFavourite({
            hotelName,
            priceAvg: price,
            stars, hotelId
        }))
    }
    const unFollowFromFavourite = () => {
        dispatch(unFollowFavourite({
            hotelName,
            priceAvg: price,
            stars, hotelId
        }))
    }
    return <div className={s.rowWrapper}>
        {img && <div className={s.hotelImage}>
            <div className={s.ellipse}>
                <img src={img} alt="house"/>
            </div>
        </div>}
        <div className={s.descriptionContainer}>
            <div className={s.description}>
                <span
                    style={(fontSize && {fontSize}) || hotelName.length > 50 ? {fontSize: '14px'} : {fontSize: '17px'}}
                    className={s.hotelName}>
                {hotelName}
            </span>
                <div className={s.heart}>
                    {isFavourite
                        ? <img onClick={unFollowFromFavourite} src={redHeart} alt="heart"/>
                        : <img onClick={followToFavourite} src={heart} alt="heart"/>}
                </div>
            </div>
            <div className={s.dateCountDays}>
                {date} - {daysCount} {dayDescription()}
            </div>
            <div className={s.stars}>
                <Stars count={stars}/>
                <div className={s.price}>
                    <span className={s.pDescription}>Price:</span><span className={s.priceCount}> {price} ₽</span>
                </div>
            </div>
        </div>

    </div>
})

