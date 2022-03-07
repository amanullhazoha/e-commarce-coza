import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PubliceRoute = ({ children }) => {
    const loggedInUser = useSelector(state => state.userReducer.state);

    return loggedInUser ? <Navigate to="/" /> : children;
}

export default PubliceRoute;