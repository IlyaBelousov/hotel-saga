import React, {useEffect} from 'react';
import s from './App.module.css'
import './App.module.css';
import {PATH, Routes} from "./common/c1-routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "./features/f2-hotels/f2-bll/hotel-saga";
import {setCheckIn} from "./features/f2-hotels/f2-bll/hotel-reducer";
import {getCheckOutDate} from "./utils/checkout-date";
import {AppRootStateType} from "./main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {Login} from "./features/f1-login/f1-ui/Login";

function App() {
    const month = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`
    const checkInDay = (new Date().getDate()) < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`
    const checkInDate = `${new Date().getFullYear()}-${month}-${checkInDay}`
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData('Moscow', checkInDate, getCheckOutDate(new Date().getDate())))
        dispatch(setCheckIn(checkInDate))
    }, [dispatch, checkInDate])
    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }
    return (
        <div className={s.App}>
            <Routes/>
        </div>
    );
}

export default App;
