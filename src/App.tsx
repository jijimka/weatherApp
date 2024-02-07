import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "./hooks/useTypedSelector";
import axios from "axios";
import {fetchWeatherAction} from "./store/reducers/weatherReducer";
import {fetchLocationAction} from "./store/reducers/locationReducer";
import MySelect from "./UI/select/MySelect";
import WeatherForecast from "./components/WeatherForecast";
import {fetchForecastAction} from "./store/reducers/forecastReducer";
import WeatherMainBlock from "./components/WeatherMainBlock";
import Loading from "./UI/loading/Loading";

const App = () => {
    const dispatch = useDispatch()
    const location = useTypedSelector(state => state.location.locationInfo)
    const weather = useTypedSelector(state => state.weather.weatherInfo)
    const forecast = useTypedSelector(state => state.forecast.forecast)
    let [loading, setLoading] = useState<boolean>(true)
    const locationOptions = [
        'London',
        'Russia',
        'France',
        'New-York',
        'Los-Angeles',
        'Canada',
        'Brazil',
        'Astana',
        'Shymkent',
        'Almaty',
        'Tashkent',
    ]
    const [weatherMoreActive, setWeatherMoreActive] = useState<boolean>(false)
    const [arrowClasses, setArrowClasses] = useState<string[]>(['more__img-icon'])
    const [locationName, setLocationName] = useState<string>('London')
    const [language, setLanguage] = useState<boolean>(false)

    enum languageTextRu {
        feelsLike = 'чувствуется как',
        minimum = 'минимум',
        maximum = 'максимум',
        average = 'среднее',
        windSpeed = 'скорость ветра км/ч',
        airHumidity = 'влажность ветра',
        gustKph = 'пыль км/ч',
        localTime = 'локальное время',
        lastUpdated = 'последнее изменение',
    }

    enum languageTextEng {
        feelsLike = 'feels like',
        minimum = 'minimum',
        maximum = 'maximum',
        average = 'average',
        windSpeed = 'wind speed kp/h',
        airHumidity = 'air humidity',
        gustKph = 'gust kph',
        localTime = "localTime",
        lastUpdated = 'last updated',
    }

    useEffect( () => {
        fetchWeather()
    }, [locationName, language])

    async function fetchWeather() {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e9367fc96026409998b94426242801&q=${locationName}&days=7&aqi=no&alerts=no&lang=${language ? 'eng' : 'ru'}`)
        dispatch(fetchWeatherAction(response.data.current))
        dispatch(fetchLocationAction(response.data.location))
        dispatch(fetchForecastAction(response.data.forecast.forecastday))
        console.log(response)
        setLoading(false)
    }

    function languageSwitcher() {
        language ? setLanguage(false) : setLanguage(true)
    }

    function weatherMoreClicked() {
        weatherMoreActive ? setWeatherMoreActive(false) : setWeatherMoreActive(true)
    }

    function locationPicked(e: ChangeEvent<HTMLSelectElement>) {

        setLocationName(e.target.value)
    }

    if (loading) return <Loading/>
    return (
        <div className='App'>
            <WeatherMainBlock location={location}
                              weather={weather}
                              weatherMoreActive={weatherMoreActive}
                              weatherMoreClicked={weatherMoreClicked}
                              languageText={language ? languageTextEng : languageTextRu}

            />
            <div>
                <MySelect options={locationOptions} selectedAction={locationPicked} placeholder='location'/>
            </div>
            <div className='weatherForecast'>
                <WeatherForecast forecast={forecast}
                                 languageText={language ? languageTextEng : languageTextRu}

                />
            </div>
            <div>
                <div>
                    <div className='language-switcher'
                         onClick={languageSwitcher}
                    >
                        <div className={!language ? 'language-switcher__block' : 'language-switcher__block language-switcher__block-active'}>
                            RU
                        </div>
                        <div className={!language ? 'language-switcher__block' : 'language-switcher__block language-switcher__block-active'}>
                            ENG
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default App;