import {actionTypes, BASE_URL} from "../store";
import {setHotelInfo} from "../actions/index"

const initState = {
    hotelInfo: {},
    hotel: ""
}

const hotelInfo = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOTEL_INFO:
            return {...state,  hotelInfo: action.info};
        case actionTypes.SET_HOTEL:
            return {...state,  hotel: action.hotel};
        default:
            return state
    }
}

export const getHotelInfo = () => dispatch => {
    fetch(`${BASE_URL}/api/hotels/current.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(setHotelInfo(data))
        })
        .catch(err => console.log(err))
}

export default hotelInfo