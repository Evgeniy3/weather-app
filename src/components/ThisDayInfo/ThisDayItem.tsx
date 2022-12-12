import React from 'react';
import IndicatorSvgSelector from '../../assets/icons/IndicatorSvgSelector';
import {Item} from './ThisDayInfo';
import './ThisDayInfo.scss'

interface Props {
    item: Item;
}

const ThisDayItem = ({ item }: Props) => {
    const {icon_id, name, value} = item
  return (
    <div className='item'>
        <div className='indicator'>
            <IndicatorSvgSelector id={icon_id}/>    
        </div>
        <div className='indicator_name'>{name}</div>
        <div className='indicator_value'>{value}</div>
    </div>
  )
};

export default ThisDayItem;