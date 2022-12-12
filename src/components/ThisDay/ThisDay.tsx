import React from 'react';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import { Weather } from '../../store/types/types';
import './ThisDay.scss'

interface Props {
  weather: Weather;
}

const ThisDay = ({weather}: Props) => {

  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  console.log(weather.weather);
  

  let date = new Date();
  let h = checkTime(date.getHours())
  let m = checkTime(date.getMinutes())

  return (
    <div className='this_day'>
      <div className='top_block'>
        <div className='top_block-wrapper'>
          <div className='this_day-temp'>{Math.round(weather.main.temp)}</div>
          <div className='this_day-day'>Сегодня</div>
        </div>
        <GlobalSvgSelector id={weather.weather[0].main}/>
      </div>
      <div className='bottom_block'>
          <div className='this_day-time'>Время: <span>{h}:{m}</span></div>
          <div className='this_city'>Город: <span>{weather.name}</span></div>
      </div>
    </div>
  )
}

export default ThisDay;