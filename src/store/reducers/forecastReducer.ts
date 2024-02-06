import {IForecast} from "../../types/IForecast";
const FETCH_FORECAST = 'FETCH_FORECAST'
interface forecastReducerProps {
    forecast:IForecast[]
}
interface forecastReducerActionProps {
    type: typeof FETCH_FORECAST,
    payload:IForecast[]
}
const defaultState:forecastReducerProps = {
    forecast:[]
}
export const forecastReducer = (state = defaultState, action:forecastReducerActionProps):forecastReducerProps => {
    switch (action.type) {
        case FETCH_FORECAST:
            return {...state,forecast:action.payload}
        default:
            return state
    }
}
export const fetchForecastAction = (payload:IForecast[]) => ({type:FETCH_FORECAST,payload})