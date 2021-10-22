import React from 'react';
import s from './Login.module.css'
import {LoginForm} from "./LoginForm";

export const Login = () => {
    return (
        <div className={s.loginContainer}>
            <div className={s.formContainer}>
                <LoginForm/>
            </div>
        </div>
    );
};

