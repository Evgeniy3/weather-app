import { WeatherServices } from "../../services/weatherServices";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
        try {
          dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
          const res = await WeatherServices.getCurrentWeather(payload);
          if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
          } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
          }
        } catch (error) {
          console.log(error);
        }
};

export default fetchCurrentWeather;