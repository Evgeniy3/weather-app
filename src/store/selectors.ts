import { RootState } from './store';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

  export const selectCurrentWeekWeatherData = (state: RootState) =>
  state.currentWeekWeatherSliceReducer;