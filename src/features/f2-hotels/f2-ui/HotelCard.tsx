import React from 'react';
import s from './HotelCard.module.css'
import HotelHead from "./HotelHead";
import Carousel from "./Carousel";


export const HotelCard = () => {
    const items = [
        {
            name: 'Aya Bouchiha',
            description: 'Full Stack Web Developer',
        },
        {
            name: 'John Doe',
            description: 'Author',
        },
        {
            name: 'Pitsu Coma',
            description: 'Math Student',
        },
    ];
    let itemsMap = items.map(i=><span>{i.name}</span>)
    return <div className={s.hotelCard}>
        <HotelHead/>
        <div className={s.carousel}>
            <Carousel children={itemsMap}/>


        </div>
        <div className={s.favourite}>

        </div>
        <div className={s.table}>

        </div>
    </div>
};

