/* eslint-disable no-useless-concat */
import axios from "axios";

const apiWeek = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

apiWeek.interceptors.request.use(config => {
    config.url =
        config.url + '&cnt=7' + '&lang=ru' + '&units=metric' + '&appid=' + process.env.REACT_APP_API_KEY_WEEK;
    return config;
});

export default apiWeek;