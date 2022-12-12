import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import fetchCurrentWeather from '../../store/thunks/fetchCurrentWeather';
import fetchCurrentWeekWeather from '../../store/thunks/fetchCurrentWeekWeather';
import { useCustomDispatch } from '../../hooks/store';
import './Form.scss';

const search = require('../../assets/images/icon-search.png')

type Props = {};

const Form = (props: Props) => {
    const [city, setCity] = useState('Москва');
    const dispatch = useCustomDispatch();


    useEffect(() => {
        dispatch(fetchCurrentWeather(city));
    }, [city]);

    useEffect(() => {
        dispatch(fetchCurrentWeekWeather(city));
    }, [city]);


    return (
        <Formik
            initialValues={{ text: '' }}
            onSubmit={(values:any) => {
                setCity(values.text)
            }}
        >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
            }) => (
                <form onSubmit={handleSubmit}
                className='form'
                >
                    <input
                        type="text"
                        name="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.text}
                        className='header_input'
                    />
                    <button type="submit" className='header__button'>
                        <img className='search-img' src={search} alt='' />
                    </button>
                </form>
            )}
        </Formik>
    )
};

export default Form;