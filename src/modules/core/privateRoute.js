import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "./components/footer.component";
import Header from "./components/header.component";

const Layout = ({ children }) => {
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

const PrivateRoute = ({ children, ...rest }) => {
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser)

    return loggedInUser ? <Layout children={children} /> : <Navigate to="/login" />
}

export default PrivateRoute;