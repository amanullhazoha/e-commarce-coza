import Types from "./user.types";

const initialStates = {
    loggedInUser: null
}

const reducer = (state = initialStates, action) => {
    switch(action.type) {
        case Types.GET_LOGGEDIN_FULFILLED: {
            const [ data ] = action.payload.user.providerData;

            return {
                ...state, 
                loggedInUser: data
            }
        }
    }

    return state;
}

export default reducer;