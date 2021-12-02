import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import s from './Login.module.css'
import {useDispatch} from "react-redux";
import {logIn, setLoading} from "../f1-bll/login-reducer";
import {Input} from "../../../common/components/input/Input";
import {Button} from "../../../common/components/button/Button";

const initialValues = {
    email: '',
    password: '',
};
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("Email is a required field"),
    password: yup
        .string()
        .required("Please enter your password")
        .matches(
            /^[a-zA-Z0-9]{8,}$/i,
            "Password must contain at least 8 characters"
        ),
});
export const Form = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: initialValues => {
            dispatch(setLoading(true))
            setTimeout(() => {
                dispatch(logIn(true))
                dispatch(setLoading(false))
            }, 1000)
        }
    });
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps("password");
    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <h3>Simple Hotel Check</h3>
            <div className={formik.errors.email ? s.inputEmailError : s.inputContainer}>
                <div className={s.inputDescription}>
                    Логин
                </div>
                <Input
                    type="email"
                    placeholder="Please Enter your email"
                    {...emailProps}
                />
                {formik.touched.email || formik.errors.email ?
                    <span className={s.errorMessage}>{formik.errors.email}</span> : null}
            </div>
            <div className={formik.errors.password ? s.inputPasswordError : s.inputContainer}>
                <div className={s.inputDescription}>
                    Пароль
                </div>
                <Input
                    type="password"
                    placeholder="Please Enter your password"
                    {...passwordProps}
                />
                {formik.touched.password || formik.errors.password ?
                    <span className={s.errorMessage}>{formik.errors.password}</span> : null}
            </div>
            <Button style={{width: '325px'}}
                    disabled={!(formik.isValid && formik.dirty)}
                    className={formik.errors.email || formik.errors.password ? s.disabledButton : s.loginButton}
                    type={'submit'}>Войти</Button>
        </form>
    );
}
