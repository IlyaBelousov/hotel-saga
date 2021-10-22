import React from 'react';
import s from './Hotels.module.css'

export const Hotels = () => {
    return <div className={s.hContainer}>
        <div className={s.hotelHeader}>
            <h3>Simple Hotel Check</h3>
            <span>Выйти</span>
        </div>
        <div className={s.hotelWrapper}>
            <div className={s.leftColumn}>

            </div>
            <div className={s.hotelCard}>

            </div>

        </div>

    </div>
};

