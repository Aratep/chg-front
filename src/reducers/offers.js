import {actionTypes, BASE_URL} from "../store";
import {setOffers} from "../actions/index"

const initState = {
    offers: {},
}

const offers = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_OFFERS:
            return {...state,  offers: action.offers};
        default:
            return state
    }
}

export const getOffers = () => dispatch => {
    fetch(`${BASE_URL}/api/hotels/current/offers.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(setOffers(data))
        })
        .catch(err => console.log(err))
}

export default offers