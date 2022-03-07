import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Types from "./user.types";
 
export const login = (values) => {
    const auth = getAuth();
    return {
        type: Types.GET_LOGGEDIN,
        payload: signInWithEmailAndPassword(auth, values.email, values.password)
    }
}