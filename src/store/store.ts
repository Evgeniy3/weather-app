import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import currentWeekWeatherSliceReducer from './slices/currentWeekWeatherSlice'

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    currentWeekWeatherSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];