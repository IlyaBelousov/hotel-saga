import React from 'react';
import s from './Login.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from '../../../common/c1-routes/Routes';
import Card from "../../../common/components/container/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import {Form} from "./Form";

export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.login.isLoading)
    if (isLoggedIn) return <Redirect to={PATH.MAIN}/>
    return (
        <div className={s.loginContainer}>
            <Card style={{width: '409px', height: '382px'}}>
                {isLoading && <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={true}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>}
                <Form/>
            </Card>
        </div>
    );
};

