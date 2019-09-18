import {actionTypes} from "../store";

const initState = {
    isAuthOpen: false,
}

const modals = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_AUTH:
            return {...state,  isAuthOpen: !state.isAuthOpen};
        default:
            return state
    }
}

export default modals