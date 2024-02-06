import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {locationReducer} from "./reducers/locationReducer";
import {weatherReducer} from "./reducers/weatherReducer";
import {thunk} from "redux-thunk";
import {forecastReducer} from "./reducers/forecastReducer";

const rootReducer = combineReducers({
    location:locationReducer,
    weather:weatherReducer,
    forecast:forecastReducer,
})
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>