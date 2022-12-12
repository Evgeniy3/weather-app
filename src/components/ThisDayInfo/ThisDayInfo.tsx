import React from 'react';
import { Weather } from '../../store/types/types';
import './ThisDayInfo.scss'
import ThisDayItem from './ThisDayItem';
const cloud = require('../../assets/images/cloud.png')

interface Props {
  weather: Weather;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = ({weather}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.round(weather.main.temp)} - ощущается как ${Math.round(weather.main.feels_like)}`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${weather.wind.speed} м/с`,
    },
  ];
  return (
    <div className='this__day_info'>
      <div className='this__day_info_items'>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className='cloud__img' src={cloud} alt="облако" />
    </div>
  );
};

export default ThisDayInfo;