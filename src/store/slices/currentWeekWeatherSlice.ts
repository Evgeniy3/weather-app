import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { WeekWeather } from "../types/types"


type CurrentWeather = {
    weekWeather: WeekWeather,
    isLoading: boolean,
    response: Response,
}

type Response = {
    status: number,
    message: string,
}

const initialState: CurrentWeather = {
    weekWeather: {
        list: [
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
            {
                dt_txt: "2022-12-10 21:00:00",
                pop: 0,
                main: {
                    temp: 0,
                    feels_like: 0,
                    pressure: 0,
                },
                weather: [
                    {
                    main: 'Sun',
                    description: "Солнечно",
                    },
                ],
                wind: {
                    speed: 0,
                },
            },
        ]
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    }
}

export const currentWeekWeatherSlice = createSlice({
    name: 'weekWeather',
    initialState,
    reducers: {
        fetchCurrentWeekWeather(state){
            state.isLoading = true
        },
        fetchCurrentWeekWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeekWeather>>){
            state.weekWeather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status : action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeekWeatherError(state, action: PayloadAction<AxiosResponse<WeekWeather>>){
            state.isLoading = true;
            state.response = {
                status : action.payload.status,
                message: action.payload.statusText,
            }
        },
    }
})

export default currentWeekWeatherSlice.reducer;