import React from 'react';
import s from './HotelCard.module.css'
import HotelHead from "./HotelHead";
import picture1 from '../../../assets/images/Rectangle23.png'
import picture2 from '../../../assets/images/Rectangle24.png'
import picture3 from '../../../assets/images/Rectangle28.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from "react-alice-carousel";
import {HotelRow} from "./HotelRow";


export const HotelCard = () => {
    const items = [
        {
            name: 'Image1',
            img:picture1
        },

        {
            name: 'Image3',
            img:picture3
        },
        {
            name: 'Image3',
            img:picture2
        },

    ];
    let itemsMap = items.map(i=><img src={i.img} className={s.slide} alt={'img'}/>)
    return <div className={s.hotelCard}>
        <HotelHead/>
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

        </div>
        <div className={s.scrollBlock}>
            <HotelRow/>
        </div>


    </div>
};

