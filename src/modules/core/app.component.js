import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux";

import PrivateRoute from "./privateRoute";
import PubliceRoute from "./publicRoute";
import { Home } from "../home/index";
import { Shop } from "../shop/index";
import { Feature } from "../feature/index";
import { Blog } from "../blog/index";
import { About } from "../about/index";
import { Contact } from "../contact/index";
import { LoginForm, Singin, userAction } from "../user"

const App = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(userAction.createUser(user))
        });

        return unsubscribe;
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={ 
                        <PubliceRoute loggedInUser={loggedInUser}> 
                            <Home />
                        </PubliceRoute> 
                    } 
                />
                <Route path="/shop" element={ 
                        <PrivateRoute loggedInUser={loggedInUser}> 
                            <Shop />
                        </PrivateRoute> 
                    } 

                 />
                <Route path="/feature" element={ 
                        <PrivateRoute loggedInUser={loggedInUser}> 
                            <Feature />
                        </PrivateRoute> 
                    } 

                />
                <Route path="/blog" element={ 
                        <PrivateRoute loggedInUser={loggedInUser}> 
                            <Blog />
                        </PrivateRoute>
                    } 
                />
                <Route path="/about" element={ 
                        <PrivateRoute loggedInUser={loggedInUser}> 
                            <About />
                        </PrivateRoute>  
                    } 
                />
                <Route path="/contact" element={
                        <PrivateRoute loggedInUser={loggedInUser}> 
                            <Contact />
                        </PrivateRoute> 
                    } 
                />
                <Route path="/login" element={
                        <PubliceRoute loggedInUser={loggedInUser}>
                            <LoginForm /> 
                        </PubliceRoute>
                    } 
                />

                <Route path="/sing-in" element={
                        <PubliceRoute loggedInUser={loggedInUser}>
                            <Singin />
                        </PubliceRoute>
                    } 
                />
            </Routes>
        </>
    );
}
 
export default App;