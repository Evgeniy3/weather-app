import React from 'react';
import './Day.scss';
import Card from './Card';
import Tabs from './Tabs';
import { WeekWeather } from '../../store/types/types';

interface Props {
  weekWeather: WeekWeather;
}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  wind : string;
  info: string;
}

const Days = ({ weekWeather }: Props) => {

  const getData = (data: string) => {
    const arr = data.split(' ')

    const date = arr[0]
    const rev = date.split("-").reverse().join("-")
    
    return rev
  }

  const getTime = (data: string) => {
    const arr = data.split(' ')

    const times = arr[1]
    const time = times.split(":").slice(0,2).join(":")
    
    return time
  }

  const days: Day[] = [
    {
      day: `${getData(weekWeather.list[0].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[0].dt_txt)}`,
      icon_id: `${weekWeather.list[0].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[0].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[0].wind.speed)} м/с`,
      info: `${weekWeather.list[0].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[1].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[1].dt_txt)}`,
      icon_id: `${weekWeather.list[1].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[1].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[1].wind.speed)} м/с`,
      info: `${weekWeather.list[1].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[2].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[2].dt_txt)}`,
      icon_id: `${weekWeather.list[2].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[2].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[2].wind.speed)} м/с`,
      info: `${weekWeather.list[2].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[3].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[3].dt_txt)}`,
      icon_id: `${weekWeather.list[3].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[3].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[3].wind.speed)} м/с`,
      info: `${weekWeather.list[3].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[4].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[4].dt_txt)}`,
      icon_id: `${weekWeather.list[4].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[4].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[4].wind.speed)} м/с`,
      info: `${weekWeather.list[4].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[5].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[5].dt_txt)}`,
      icon_id: `${weekWeather.list[5].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[5].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[5].wind.speed)} м/с`,
      info: `${weekWeather.list[5].weather[0].description}`,
    },
    {
      day: `${getData(weekWeather.list[6].dt_txt)}`,
      day_info: `${getTime(weekWeather.list[6].dt_txt)}`,
      icon_id: `${weekWeather.list[6].weather[0].main}`,
      temp_day: `${Math.round(weekWeather.list[6].main.temp)}`,
      wind: `Ветер ${Math.round(weekWeather.list[6].wind.speed)} м/с`,
      info: `${weekWeather.list[6].weather[0].description}`,
    },
  ];
  return (
    <>
      <Tabs />
      <div className='days'>
        {days.map((day: Day) => (<Card day={day} />))}
      </div>
    </>
  )
}

export default Days;