// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PubliceRoute = ({ children, ...rest }) => {
    // const loggedInUser = useSelector(state => state.userReducer.state);

    return rest.loggedInUser ?  <Navigate to="/" /> : children;
}

export default PubliceRoute;