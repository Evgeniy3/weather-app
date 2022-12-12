import React from "react";
import Header from "./components/Header/Header";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import ThisDay from './components/ThisDay/ThisDay'
import './styles/index.scss'
import Days from "./components/Days/Days";
import Popup from "./components/Popup/Popup";
import { useCustomSelector } from "./hooks/store";
import { selectCurrentWeatherData, selectCurrentWeekWeatherData } from "./store/selectors";

function App() {
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { weekWeather } = useCustomSelector(selectCurrentWeekWeatherData);

  return (
     <div className="container">
      <Header />
      <div className="info_wrapper" >
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather}/>
      </div>
      <Days weekWeather={weekWeather}/>
      <Popup />
    </div> 
  );
}

export default App;
