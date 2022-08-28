import { types } from "./types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        case types.logout:
            return {
                ...state,
                logged: false,
                user: null, //To reset this value, you can either remove it o chance its value to null
            };

        default:
            return state;
    }
}