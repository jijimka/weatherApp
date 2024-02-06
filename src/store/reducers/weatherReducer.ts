import {IWeather} from "../../types/IWeather";

const FETCH_WEATHER = 'FETCH_WEATHER'
interface weatherReducerActionType {
    type:typeof FETCH_WEATHER,
    payload:object
}
interface weatherReducerProps {
    weatherInfo:IWeather,
}
const defaultState:weatherReducerProps = {
    weatherInfo:{} as IWeather
}
export const weatherReducer = (state = defaultState,action:weatherReducerActionType):weatherReducerProps => {
    switch (action.type) {
        case FETCH_WEATHER:
            return {...state,weatherInfo:action.payload} as weatherReducerProps
        default:
            return state
    }
}
export const fetchWeatherAction = (payload:object) => ({type:FETCH_WEATHER,payload})