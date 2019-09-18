import {actionTypes, BASE_URL} from "../store";
import {setRooms} from "../actions/index"

const initState = {
    rooms: {},
}

const rooms = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_ROOMS:
            return {...state,  rooms: action.rooms};
        default:
            return state
    }
}

export const getRooms = () => dispatch => {
    fetch(`${BASE_URL}/api/hotels/current/rooms.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(setRooms(data))
        })
        .catch(err => console.log(err))
}

export default rooms