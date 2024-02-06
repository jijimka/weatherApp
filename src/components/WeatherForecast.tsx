import React, {FC} from 'react';
import {IForecast} from "../types/IForecast";
import WeatherMiniBlock from "./WeatherMiniBlock";
import {ILanguageText} from "../types/ILanguageText";
interface WeatherForecastProps {
    forecast:IForecast[],
    languageText:ILanguageText,
}
const WeatherForecast:FC<WeatherForecastProps> = ({forecast, languageText}) => {
    return (
        <div className='forecast__blocks'>
            {forecast.map(fc =>
                <WeatherMiniBlock languageText={languageText} weather={fc.day} date={fc.date}/>
            )}
        </div>
    );
};

export default WeatherForecast;