import React from 'react';
import {useFormik} from "formik";
import s from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {logIn} from "../f1-bll/login-reducer";
import {Input} from "../../../common/components/Input";
import {Button} from "../../../common/components/Button";

type FormikErrorType = {
    email?: string
    password?: string
}


export const LoginForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) errors.password = 'Required'
            else if (!/^[a-zA-Z0-9]{8,}$/i.test(values.password)) {
                errors.password = 'Min 8 characters'
            }
            return errors;
        },

        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            setTimeout(()=>{
                dispatch(logIn(true))
            },1000)
        },
    })
    return <form className={s.form} onSubmit={formik.handleSubmit}>
        <h3>Simple Hotel Check</h3>
        <div className={formik.errors.email ? s.inputEmailError : s.inputContainer}>
            <div className={s.inputDescription}>
                Логин
            </div>
            <Input  style={{height: '40px', width: '340px'}}
                   onChange={formik.handleChange}
                   value={formik.values.email}
                   type="text" name={'email'}/>

            {formik.errors.email ? <span className={s.errorMessage}>{formik.errors.email}</span> : null}
        </div>
        <div className={formik.errors.password ? s.inputPasswordError : s.inputContainer}>
            <div className={s.inputDescription}>
                Пароль
            </div>
            <Input style={{height: '40px', width: '340px'}}
                   onChange={formik.handleChange}
                   value={formik.values.password}
                   type="password" name={'password'}/>
            {formik.errors.password ? <span className={s.errorMessage}>{formik.errors.password}</span> : null}

        </div>
        <Button disabled={!!(formik.errors.email || formik.errors.password)}
                className={formik.errors.email || formik.errors.password ? s.disabledButton : s.loginButton}
                type={'submit'}>Войти</Button>

    </form>
};

