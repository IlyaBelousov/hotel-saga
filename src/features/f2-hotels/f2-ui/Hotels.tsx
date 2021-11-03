import React, {useEffect} from 'react';
import s from './Hotels.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../../common/c1-routes/Routes";
import logout from '../../../assets/images/common-images/logout.png'
import {logIn} from "../../f1-login/f1-bll/login-reducer";
import Card from "../../../common/components/container/Card";
import {HotelCard} from "./HotelCard";
import {fetchData} from "../f2-bll/hotel-saga";
import {HotelSearchForm} from "./HotelSearchForm";
import {setCheckIn, setError, setIsLoading} from "../f2-bll/hotel-reducer";
import {FavouriteCard} from "./FavouriteCard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/lab";


export const Hotels = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.hotel.isLoading)
    const error = useSelector<AppRootStateType,string>(state=>state.hotel.error)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const logOutHandler = () => {
        dispatch(setIsLoading(true))
        setTimeout(()=>{
            dispatch(logIn(false))
            dispatch(setIsLoading(false))
        },2000)
    }
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setError(''))
        dispatch(logIn(false))
    };
    if (!isLoggedIn) return <Redirect to={PATH.LOGIN}/>
    return <div className={s.hContainer}>
        {error&&<Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {error}
            </Alert>
        </Snackbar>}
        <div className={s.hotelHeader}>
            <h3>Simple Hotel Check</h3>
            <span onClick={logOutHandler} className={s.logOut}>Выйти <img src={logout} alt="logout"/>
            </span>
        </div>
        <div className={s.hotelWrapper}>
            {isLoading && <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={true}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>}
            <div style={{marginRight: '24px'}} className={s.leftColumn}>
                <Card style={{width: '360px', height: '410px', padding: '5px', marginBottom: '24px'}}>
                    <HotelSearchForm/>
                </Card>
                <FavouriteCard/>
            </div>
            <HotelCard/>
        </div>

    </div>
};

