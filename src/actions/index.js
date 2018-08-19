import axios from 'axios';

const API_KEY = '4ae2b1db5f1dbd12702b469e584c8eb2';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // axios returns a promise
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
