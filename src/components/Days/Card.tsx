import React from 'react';
import './Day.scss';
import { Day } from './Days';
import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

interface Props {
    day: Day;
}

const Card = ({ day }: Props) => {
    return (
        <div className='card'>
            <div className='day'>{day.day}</div>
            <div className='day__info'>{day.day_info}</div>
            <div className='img'>
                <GlobalSvgSelector id={day.icon_id} />
            </div>
            <div className='temp__day'>{day.temp_day}</div>
            <div className='temp__night'>{day.wind}</div>
            <div className='info'>{day.info}</div>
        </div>
    )
}

export default Card