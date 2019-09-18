import {actionTypes, BASE_URL} from "../store";
import {setRestaurantInfo} from "../actions/index"

const initState = {
    restaurant: {},
}

const restaurant = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESTAURANT_INFO:
            return {...state,  restaurant: action.restaurant};
        default:
            return state
    }
}

export const getRestaurantInfo = () => dispatch => {
    fetch(`${BASE_URL}/api/hotels/current/restaurant.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(setRestaurantInfo(data))
        })
        .catch(err => console.log(err))
}

export default restaurant