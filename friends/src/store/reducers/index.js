import {FETCH_FRIENDS, ADD_FRIEND} from '../action';
const initialState = {
    friends: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) { //
        case FETCH_FRIENDS:
            return {
                friends: action.payload
            }
        case ADD_FRIEND:
            return {
                friends: action.payload
            }
        default:
        return state;
    }
}

export default reducer;