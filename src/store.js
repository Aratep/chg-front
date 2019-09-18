import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import hotelInfo from "./reducers/hotel-info"
import modals from "./reducers/modals"
import rooms from "./reducers/rooms"
import restaurant from "./reducers/restaurant"
import confRoom from "./reducers/conference-room"
import offers from "./reducers/offers"

export const BASE_URL = `${window.location.protocol}//${window.location.host}`

//ACTION TYPES
export const actionTypes = {
    TOGGLE_AUTH: "TOGGLE_AUTH",
    SET_HOTEL_INFO: "SET_HOTEL_INFO",
    SET_HOTEL: "SET_HOTEL",
    SET_ROOMS: "SET_ROOMS",
    SET_RESTAURANT_INFO: "SET_RESTAURANT_INFO",
    SET_CONFERENCE_ROOM_INFO: "SET_CONFERENCE_ROOM_INFO",
    SET_OFFERS: "SET_OFFERS",
}

const reducers = combineReducers({
    hotelInfo,
    modals,
    rooms,
    restaurant,
    confRoom,
    offers
});

//store
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
