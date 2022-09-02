// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import Header from "./components/header.component";
import Footer from "./components/footer.component";


const Layout = ({ children }) => {
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

const PubliceRoute = ({ children, ...rest }) => {
    // const loggedInUser = useSelector(state => state.userReducer.state);

    //return rest.loggedInUser ?  <Navigate to="/" /> : children;

    return children.type.name === "Singin" || children.type.name === "LoginForm" ? children : <Layout>{children}</Layout>
}

export default PubliceRoute;