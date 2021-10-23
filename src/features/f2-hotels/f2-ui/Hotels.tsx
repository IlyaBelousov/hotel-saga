import React from 'react';
import s from './Hotels.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {LOGIN} from "../../../common/c1-routes/Routes";
import logout from '../../../assets/images/logout.png'
import {logIn} from "../../f1-login/f1-bll/login-reducer";
import Card from "../../../common/components/Card";
import {Input} from "../../../common/components/Input";
import {Button} from "../../../common/components/Button";
import {HotelCard} from "./HotelCard";


export const Hotels = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(logIn(false))
    }



    if (!isLoggedIn) return <Redirect to={LOGIN}/>
    return <div className={s.hContainer}>
        <div className={s.hotelHeader}>
            <h3>Simple Hotel Check</h3>
            <span onClick={logOutHandler} className={s.logOut}>Выйти <img src={logout} alt="logout"/>
            </span>

        </div>
        <div className={s.hotelWrapper}>
            <div style={{marginRight: '24px'}} className={s.leftColumn}>
                <Card style={{width: '360px', height: '410px', padding: '5px', marginBottom: '24px'}}>
                    <div className={s.inputContainer}>
                        <div className={s.inputDescription}>
                            Локация
                        </div>
                        <Input style={{height: '40px', width: '320px'}}/>
                    </div>
                    <div className={s.inputContainer}>
                        <div className={s.inputDescription}>
                            Дата заселения
                        </div>
                        <Input type={'date'} style={{height: '40px', width: '320px'}}/>
                    </div>
                    <div className={s.inputContainer}>
                        <div className={s.inputDescription}>
                            Количество дней
                        </div>
                        <Input style={{height: '40px', width: '320px'}}/>
                    </div>
                    <Button>Найти</Button>

                </Card>
                <Card style={{
                    width: '360px',
                    height: '472px',
                }}>

                </Card>

            </div>
            <HotelCard/>

        </div>

    </div>
};

