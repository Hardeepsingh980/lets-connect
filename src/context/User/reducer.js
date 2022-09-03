import { CHANGE_ERROR, CHANGE_TOKEN, CHANGE_LOADING, CHANGE_USER } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case CHANGE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case CHANGE_USER:
            return {
                ...state,
                user: action.payload,
            };
        case CHANGE_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
}