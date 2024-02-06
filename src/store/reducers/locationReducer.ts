import {ILocation} from "../../types/ILocation";

const FETCH_LOCATION = 'FETCH_LOCATION'
interface locationReducerActionType {
    type:typeof FETCH_LOCATION,
    payload:object
}
interface locationReducerProps {
    locationInfo:ILocation
}
const defaultState:locationReducerProps = {
    locationInfo:{} as ILocation
}
export const locationReducer = (state = defaultState,action:locationReducerActionType):locationReducerProps => {
    switch (action.type) {
        case FETCH_LOCATION:
            return {...state,locationInfo:action.payload} as locationReducerProps
        default:
            return state
    }
}
export const fetchLocationAction = (payload:object) => ({type:FETCH_LOCATION,payload})