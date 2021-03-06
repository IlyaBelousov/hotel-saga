import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from "./Hotels.module.css";
import {Input} from "../../../common/components/input/Input";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import {Button} from "../../../common/components/button/Button";
import {fetchData} from "../f2-bll/hotel-saga";
import {useDispatch} from "react-redux";
import {setCheckIn, setDaysCount} from "../f2-bll/hotel-reducer";
import {getCheckout} from "../../../utils/search-form-checkout";

export const HotelSearchForm = () => {
    const [location, setLocation] = useState('Moscow')
    const [datePickerValue, setDatePickerValue] = useState<Date | null>(new Date());
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const onLocationChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.currentTarget.value)
    }
    const onCountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value <= 0) {
            return
        }
        setCount(+e.currentTarget.value)
    }
    const checkInDate = datePickerValue?.toISOString().slice(0, 10)
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchData(location, checkInDate && checkInDate, getCheckout(datePickerValue && (datePickerValue?.getFullYear()), datePickerValue && (datePickerValue?.getMonth() + 1), datePickerValue && (datePickerValue?.getDate()), count)))
        dispatch(checkInDate && setCheckIn(checkInDate))
        dispatch(setDaysCount(count))
    }
    return <form onSubmit={onSubmitHandler}>
        <div className={s.inputContainer}>
            <div className={s.inputDescription}>
                Локация
            </div>
            <Input onChange={onLocationChangeHandler}
                   value={location}
                   style={{height: '50px', width: '320px'}}/>
        </div>
        <div className={s.inputContainer}>
            <div className={s.inputDescription}>
                Дата заселения
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div style={{width: '323px'}}>
                    <DatePicker
                        minDate={new Date()}
                        value={datePickerValue}
                        onChange={(newValue) => setDatePickerValue(newValue)}
                        renderInput={(params) => <TextField fullWidth={true} {...params} />}
                    />
                </div>
            </LocalizationProvider>
        </div>
        <div className={s.inputContainer}>
            <div className={s.inputDescription}>
                Количество дней
            </div>
            <Input
                onChange={onCountChangeHandler}
                value={count}
                style={{height: '50px', width: '320px'}}
                type={'number'}/>
        </div>
        <Button>Найти</Button>
    </form>
};

