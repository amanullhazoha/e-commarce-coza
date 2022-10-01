import Types from "./user.types";

const initialStates = {
    loggedInUser: null
}

const reducer = (state = initialStates, action) => {
    switch(action.type) {
        case Types.GET_LOGGEDIN_FULFILLED: {
            const [ data ] = action.payload.user.providerData;

            return { ...state, loggedInUser: data }
        }
        case Types.CREATE_USER: {
            return { ...state, loggedInUser: action.payload }
        }
        case Types.LOG_OUT_USER_FULFILLED: {
            return { ...state, loggedInUser: null }
        }
        default:
            return state;
    }
}

export default reducer;