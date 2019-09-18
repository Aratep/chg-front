import {actionTypes} from "../store";

export const toggleAuthModal = () => {
    return {type: actionTypes.TOGGLE_AUTH};
}

export const setHotelInfo = (info) => {
    return {type: actionTypes.SET_HOTEL_INFO, info};
}

export const setHotel = (hotel) => {
    return {type: actionTypes.SET_HOTEL, hotel};
}

export const setRooms = (rooms) => {
    return {type: actionTypes.SET_ROOMS, rooms};
}

export const setRestaurantInfo = (restaurant) => {
    return {type: actionTypes.SET_RESTAURANT_INFO, restaurant};
}

export const setConferenceRoomInfo = (confRoom) => {
    return {type: actionTypes.SET_CONFERENCE_ROOM_INFO, confRoom};
}

export const setOffers = (offers) => {
    return {type: actionTypes.SET_OFFERS, offers};
}