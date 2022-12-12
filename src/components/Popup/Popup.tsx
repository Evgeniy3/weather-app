import React from 'react';
import './Popup.scss';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';
import ThisDayItem from '../ThisDayInfo/ThisDayItem';


interface Props {}

export interface Item {
    icon_id: string;
    name: string;
    value: string;
  };

const Popup = (props: Props) => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
  return (
    <>
    <div className='blur'></div>
    <div className='popup'>
      <div className='day'>
        <div className='day__temp'>20°</div>
        <div className='day__name'>Среда</div>
        <div className='img'>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className='day__time'>
          Время: <span>21:00</span>
        </div>
        <div className='day__city'>
          Время: <span>Орск</span>
        </div>
      </div>
      <div className='this__day_info_items'>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <div className='close'>
        <GlobalSvgSelector id="close" />
      </div>
    </div>
  </>
  )
};

export default Popup;