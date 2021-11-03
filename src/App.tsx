import React, {useEffect} from 'react';
import s from './App.module.css'
import './App.module.css';
import {Routes} from "./common/c1-routes/Routes";
import {useDispatch} from "react-redux";
import {fetchData} from "./features/f2-hotels/f2-bll/hotel-saga";
import {setCheckIn} from "./features/f2-hotels/f2-bll/hotel-reducer";

function App() {
    const month = (new Date().getMonth() + 1)<10?`0${new Date().getMonth() + 1}`:`${new Date().getMonth() + 1}`
    const day = (new Date().getDate())<10?`0${new Date().getDate()}`:`${new Date().getDate()}`
    const checkInDate = `${new Date().getFullYear()}-${month}-${day}`
    const checkOutDate = `${new Date().getFullYear()}-${month}-${day}`
    const dispatch = useDispatch()
    useEffect(() => {
        debugger
        dispatch(fetchData('Moscow', checkInDate, checkOutDate))
        dispatch(setCheckIn(checkInDate))
    }, [dispatch,checkInDate,checkOutDate])
  return (
    <div className={s.App}>
      <Routes/>
    </div>
  );
}

export default App;
