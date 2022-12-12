import { AxiosResponse } from "axios";
import api from "../axios";
import apiWeek from '../axios/weekApi'
import { Weather, WeekWeather } from "../store/types/types";

export class WeatherServices {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api.get<Weather>(`/weather?q=${city}`)
    }
}

export class WeekWeatherServices {
    static getCurrentWeekWeather(city: string): Promise<AxiosResponse<WeekWeather>> {
        return apiWeek.get<WeekWeather>(`/forecast?q=${city}`)
    }
}