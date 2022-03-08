import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Types from "./user.types";
 
export const login = (values) => {
    const auth = getAuth();
    return {
        type: Types.GET_LOGGEDIN,
        payload: signInWithEmailAndPassword(auth, values.email, values.password)
    }
}

export const createUser = (user) => {
    return {
        type: Types.CREATE_USER,
        payload: user,
    }
}

export const logout = () => {
    const auth = getAuth();
    
    return {
        type: Types.LOG_OUT_USER,
        payload: signOut(auth)
    }
}