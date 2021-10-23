import React from 'react';
import s from './Login.module.css'
import {LoginForm} from "./LoginForm";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {HOTELS} from '../../../common/c1-routes/Routes';
import Card from "../../../common/components/Card";

export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    if (isLoggedIn) return <Redirect to={HOTELS}/>
    return (
        <div className={s.loginContainer}>
            <Card style={{width:'409px',height:'382px'}}>
                <LoginForm/>
            </Card>
        </div>
    );
};

