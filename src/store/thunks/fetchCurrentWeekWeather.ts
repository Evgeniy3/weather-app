import { WeekWeatherServices } from "../../services/weatherServices";
import { currentWeekWeatherSlice } from "../slices/currentWeekWeatherSlice";
import { AppDispatch } from "../store";

const fetchCurrentWeekWeather = (payload: string) => async (dispatch: AppDispatch) => {
        try {
          dispatch(currentWeekWeatherSlice.actions.fetchCurrentWeekWeather());
          const res = await WeekWeatherServices.getCurrentWeekWeather(payload);
          if (res.status === 200) {
            dispatch(currentWeekWeatherSlice.actions.fetchCurrentWeekWeatherSuccess(res));
          } else {
            dispatch(currentWeekWeatherSlice.actions.fetchCurrentWeekWeatherError(res));
          }
        } catch (error) {
          console.log(error);
        }
};

export default fetchCurrentWeekWeather;