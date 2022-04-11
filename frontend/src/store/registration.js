import { csrfFetch } from "./csrf";

const ADD_REGISTER = 'registration/addRegister';
const GET_All = 'registration/getAllRegister';
const DELETE_ONE = 'registration/deleteOne';
const UPDATE_REGISTER = 'registration/updateRegister'

const addRegister = (info) => {

    return {
        type: ADD_REGISTER,
        payload: info
    }
}
const getAllRegister = (registratios) => {

    return {
        type: GET_All,
        payload: registratios
    }
}

const deleteOne = (id) => {

    return {
        type: DELETE_ONE,
        payload: id
    }
}

const updateRegister = (id, info) => {
    return {
        type: UPDATE_REGISTER,
        id,
        payload: info,
    }
}
export const getAll = () => async (dispatch) => {
    const response = await csrfFetch("/api/registration");
    if (response.ok) {
        const data = await response.json();
        dispatch(getAllRegister(data.registrations))
    }
}

export const addRegistration = ({ info }) => async (dispatch) => {
    const { userId, postId, name, email, phone } = info;
    const response = await csrfFetch('/api/registration/new', {
        method: "POST",
        body: JSON.stringify({
            userId,
            postId,
            name,
            email,
            phone
        })
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(addRegister(data.registration));
        return response;
    }
}

export const deleteRegistration = ({ id }) => async (dispatch) => {

    const response = await csrfFetch(`/api/registration/${id}`, {
        method: "DELETE"
    });
    dispatch(deleteOne(id));
    return response;

}

export const updateRegistration = ({ id, info }) => async (dispatch) => {
    const { name, email, phone } = info;
    const response = await csrfFetch(`/api/registration/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            name,
            email,
            phone
        })
    });
    if (response.ok) {
        dispatch(updateRegister(id, info));
        return response;
    }
}

const initialState = {};


const registrationReducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {
        case GET_All:
            newState = { ...state };
            action.payload.forEach(register => {
                newState[register.id] = register;
            });
            return {
                ...newState, ...state
            };
        case ADD_REGISTER:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        case DELETE_ONE:
            newState = { ...state };
            delete newState[action.payload];
            return newState;
        case UPDATE_REGISTER:
            newState = { ...state };
            newState[action.id] = action.payload;
            return newState;
        default:
            return state;
    }
}
export default registrationReducer;
