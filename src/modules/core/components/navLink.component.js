import { Link } from "react-router-dom";

const Navigations = ({ navigations }) => {
    return (
        <ul>
            {navigations.map(navigation => (
                <li key={navigation.name}>
                    <Link to={navigation.link}>{navigation.name}</Link>
                </li>
            ))}
        </ul>
    );
}
 
export default Navigations;