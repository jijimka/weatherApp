import React, {FC, MouseEventHandler, useState} from 'react';
import WeatherDetailsBlock from "./WeatherDetailsBlock";
import {ILocation} from "../types/ILocation";
import {IWeather} from "../types/IWeather";
import {ILanguageText} from "../types/ILanguageText";
interface WeatherMainBlockProps {
    location:ILocation,
    weather:IWeather,
    weatherMoreActive:boolean,
    weatherMoreClicked:MouseEventHandler,
    languageText:ILanguageText,
}

const WeatherMainBlock:FC<WeatherMainBlockProps> = ({location, weather,weatherMoreActive,weatherMoreClicked,languageText}) => {
    return (
        <div className={weatherMoreActive ? 'weatherApp__wrapper weatherApp__wrapper-active' : 'weatherApp__wrapper'}>
            <div className='weatherApp'>
                <div className='weatherApp__location'>
                    <div className='location__text'>
                        {location.name}, {location.country}
                    </div>
                    <div
                        className={weatherMoreActive ? 'weatherApp__more' : 'weatherApp__more weatherApp__more-active'}
                        onClick={weatherMoreClicked}
                    >
                        <img className='more__img-icon'
                             src='https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png'
                        />
                    </div>
                </div>
                <div className='weatherApp__weather'>
                    <img className='weather__icon' src={weather.condition.icon}/>
                    <div className='weather__body'>
                        <h1 className='weather__text'>{weather.condition.text}</h1>
                        <h2 className='weather__deg'>
                            {
                                weather.temp_c + '°C'} {languageText.feelsLike} {Math.round(weather.feelslike_c) + '°C'
                        }
                        </h2>
                    </div>
                </div>
            </div>
            <div className={weatherMoreActive ? 'weatherApp__details weatherApp__details-active' : 'weatherApp__details'}>
                <WeatherDetailsBlock location={location}
                                     weather={weather}
                                     languageText={languageText}
                />
            </div>
        </div>
    );
};

export default WeatherMainBlock;