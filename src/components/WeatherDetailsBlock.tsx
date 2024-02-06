import React, {FC} from 'react';
import {IWeather} from "../types/IWeather";
import {ILocation} from "../types/ILocation";
import {ILanguageText} from "../types/ILanguageText";
interface WeatherDetailsBlockProps {
    weather:IWeather,
    location:ILocation,
    languageText:ILanguageText,
}
const WeatherDetailsBlock:FC<WeatherDetailsBlockProps> = ({weather,location,languageText}) => {
    return (
        <div className='weatherApp__details-block'>
            <div className='details__last-updated'>
                {weather.last_updated} {languageText.lastUpdated}
            </div>
            <div className='details__body'>
            <p className='details__paragraph'>{weather.wind_kph + 'kph'} {languageText.windSpeed}</p>
            <p className='details__paragraph'>{weather.humidity} {languageText.airHumidity}</p>
            <p className='details__paragraph'>{weather.gust_kph} {languageText.gustKph}</p>
            <p className='details__paragraph'>{location.localtime} {languageText.localTime}</p>
            </div>
        </div>
    );
};

export default WeatherDetailsBlock;