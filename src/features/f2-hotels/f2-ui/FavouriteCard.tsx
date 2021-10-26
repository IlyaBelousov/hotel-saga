import React, {useState} from 'react';
import Card from "../../../common/components/container/Card";
import s from './HotelCard.module.css'
import st from './FavouriteCard.module.css'
import selectUpDis from '../../../assets/images/common-images/selectupDisable.png'
import selectUpActive from '../../../assets/images/common-images/selectup.png'
import selectDownDis from '../../../assets/images/common-images/selectdown.png'
import selectDownActive from '../../../assets/images/common-images/selectDownActive.png'
import {SortPicker} from "../../../common/components/picker/SortPicker";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {FavouriteType} from "../f2-bll/hotel-reducer";
import {HotelRow} from "./HotelRow";



export const FavouriteCard = () => {
    const favourites = useSelector<AppRootStateType, FavouriteType[]>(state => state.hotel.favourites)
    const checkInDate = useSelector<AppRootStateType, string>(state => state.hotel.checkIn)
    const daysCount = useSelector<AppRootStateType,number>(state=>state.hotel.daysCount)
    const [downRating, setDownRating] = useState(false)
    const [downPrice, setDownPrice] = useState(false)
    const onRatingArrowUpClick = () => {
        setDownRating(true)
    }
    const onRatingArrowDownClick = () => {
        setDownRating(false)
    }
    const onPriceArrowUpClick = () => {
        setDownPrice(false)
    }
    const onPriceArrowDownClick = () => {
        setDownPrice(true)
    }

    if(downPrice){
        favourites.sort((a,b)=>a.priceAvg-b.priceAvg)
    }
    if(!downPrice){
        favourites.sort((a,b)=>b.priceAvg-a.priceAvg)
    }
    if(downRating){
        favourites.sort((a,b)=>a.stars-b.stars)
    }
    if(!downRating){
        favourites.sort((a,b)=>b.stars-a.stars)
    }
    let favouritesHotels = favourites.map(f => {
        let favorite = favourites&&favourites.filter(fElem => fElem.hotelId === f.hotelId)[0];
        let isFavorite = favorite && favorite.hotelId===f.hotelId
        return (
            <HotelRow
                key={f.hotelId}
                fontSize={'13px'}
                daysCount={daysCount}
                stars={f.stars}
                date={checkInDate}
                hotelId={f.hotelId}
                price={f.priceAvg}
                isFavourite={isFavorite?isFavorite:false}
                hotelName={f.hotelName} />
        )
    })


    return <Card style={{
        width: '360px',
        height: '472px',
    }}>
        <h3 className={st.title}>Избранное</h3>
        <div className={st.sortingWrapper}>
            <SortPicker onArrowUpClick={onRatingArrowUpClick}
                        onArrowDownClick={onRatingArrowDownClick}
                        name={'Рейтинг'} arrowDown={downRating ? selectDownDis : selectDownActive}
                        arrowUp={downRating ? selectUpActive : selectUpDis}/>
            <SortPicker data-price={'price'}
                        onArrowDownClick={onPriceArrowUpClick}
                        onArrowUpClick={onPriceArrowDownClick}
                        name={'Цена'}
                        arrowDown={downPrice ? selectDownDis : selectDownActive}
                        arrowUp={downPrice ? selectUpActive : selectUpDis}/>
        </div>

        <div className={s.scrollBlock}>
            {favouritesHotels}
        </div>

    </Card>
};

