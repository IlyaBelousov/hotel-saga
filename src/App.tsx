import React, {useEffect} from 'react';
import s from './App.module.css'
import BackGroundImage from './assets/images/IMG_20210312_140957_1741.png'

import './App.module.css';
import axios from "axios";
import {Routes} from "./common/c1-routes/Routes";

function App() {
  // useEffect(()=>{
  //   axios.get('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-12-10&checkOut=2021-12-12&limit=10')
  //       .then(response=>{
  //         console.log(response.data)
  //       })
  // },[])
  return (
    <div  className={s.App}>
      <Routes/>
    </div>
  );
}

export default App;
