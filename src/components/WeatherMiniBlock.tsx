import React, {FC} from 'react';
import {ILocation} from "../types/ILocation";
import {IForecastWeather} from "../types/IForecast";
import {ILanguageText} from "../types/ILanguageText";


interface WeatherBlockProps {
    weather: IForecastWeather,
    location?:ILocation,
    date?:string,
    languageText:ILanguageText,
}

const WeatherBlock: FC<WeatherBlockProps> = ({weather,location,date,languageText}) => {
    return (
        <div className='weatherApp-mini'>
            <div className='weatherApp-mini__location'>
                {location ? location.name + ' ' + location.country : date}
            </div>
            <div className='weatherApp-mini__weather'>
                <img className='weather-mini__icon' src={weather.condition.icon}/>
                <div className='weather-mini__body'>
                    <h1 className='weather-mini__text'>{weather.condition.text}</h1>
                    <h2 className='weather-mini__deg'>
                        {Math.round(weather.mintemp_c) + `°C ${languageText.minimum}`} {Math.round(weather.maxtemp_c) + `°C ${languageText.maximum}`} <br></br> {Math.round(weather.avgtemp_c) + `°C ${languageText.average}`}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default WeatherBlock;