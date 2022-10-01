import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux";

import Header from "./components/header.component";
import Footer from "./components/footer.component";
import { Home } from "../home/index";
import { Shop } from "../shop/index";
import { Feature } from "../feature/index";
import { Blog } from "../blog/index";
import { About } from "../about/index";
import { Contact } from "../contact/index";
import { LoginForm, Singin, userAction } from "../user"

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            dispatch(userAction.createUser(user))
        });

        return unsubscribe;
    }, []);

    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/shop" element={ <Shop /> } />
                    <Route path="/feature" element={ <Feature /> } />
                    <Route path="/blog" element={ <Blog /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="/login" element={<LoginForm /> } />
                    <Route path="/singin" element={<Singin /> } />
                </Routes>
            <Footer />
        </>
    );
}
 
export default App;