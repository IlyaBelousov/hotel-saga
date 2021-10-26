import React from 'react';
import s from './HotelCard.module.css'
import HotelHead from "./HotelHead";
import picture1 from '../../../assets/images/carousel-images/Rectangle23.png'
import picture2 from '../../../assets/images/carousel-images/Rectangle24.png'
import picture3 from '../../../assets/images/carousel-images/Rectangle28.png'
import house from '../../../assets/images/hotel-images/house.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import {HotelRow} from "./HotelRow";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {HotelType} from "../../../main/m3-dal/hotel-api";
import {FavouriteType} from "../f2-bll/hotel-reducer";


export const HotelCard = () => {
    const hotels = useSelector<AppRootStateType, HotelType[]>(state => state.hotel.hotels)
    const favorites = useSelector<AppRootStateType, FavouriteType[]>(state => state.hotel.favourites)
    const checkInDate = useSelector<AppRootStateType, string>(state => state.hotel.checkIn)
    const daysCount = useSelector<AppRootStateType, number>(state => state.hotel.daysCount)
    const items = [
        {
            name: 'Image1',
            img: picture1
        },

        {
            name: 'Image3',
            img: picture3
        },
        {
            name: 'Image3',
            img: picture2
        },

    ];
    let itemsMap = items.map(i => <img src={i.img} className={s.slide} alt={'img'}/>)

    const hotelItems = hotels
        .map(hotel => {
            let favorite = favorites && favorites.filter(fElem => fElem.hotelId === hotel.hotelId)[0];
            let isFavorite = favorite && favorite.hotelId === hotel.hotelId
            return (
                <HotelRow
                    img={house}
                    key={hotel.hotelId}
                    hotelId={hotel.hotelId}
                    date={checkInDate}
                    hotelName={hotel.hotelName}
                    stars={hotel.stars}
                    daysCount={daysCount}
                    isFavourite={isFavorite ? isFavorite : false}
                    price={hotel.priceAvg}
                />
            )
        })
    const favouritesDesc = () => {
        if(favorites.length===1) return 'отель'
        if((favorites.length>4&&favorites.length<21)||(favorites.length>24&&favorites.length<31)||favorites.length===0) return 'отелей'
        else return 'отеля'
    }


    return <div className={s.hotelCard}>

        <HotelHead date={checkInDate} location={hotels[0].location.name}/>
        <AliceCarousel
            autoWidth
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1500}
            animationDuration={1500}
            animationType="slide"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={itemsMap}
        />
        <div className={s.favourite}>
            Добавлено в Избранное : {favorites.length} {favouritesDesc()}

        </div>
        <div className={s.scrollBlock}>
            {hotelItems}
        </div>


    </div>
};

