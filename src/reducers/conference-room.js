import {actionTypes, BASE_URL} from "../store";
import {setConferenceRoomInfo} from "../actions/index"

const initState = {
    confRoom: {},
}

const confRooms = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CONFERENCE_ROOM_INFO:
            return {...state,  confRoom: action.confRoom};
        default:
            return state
    }
}

export const getConferenceRoomInfo = () => dispatch => {
    fetch(`${BASE_URL}/api/hotels/current/conference.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(setConferenceRoomInfo(data))
        })
        .catch(err => console.log(err))
}

export default confRooms