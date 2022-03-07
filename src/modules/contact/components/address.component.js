import { Col } from "react-bootstrap";

import classes from "../style/address.module.scss";


const Group = ({ heading, parh, icon }) => (
    <div className={classes.group}>
        <i className={`fas ${icon}`} />
        <div>
            <h3>{heading}</h3>
            <p>{parh}</p>
        </div>
    </div>
);

const Address = () => {
    return (
        <Col md={6} className={classes.contact}>
            <Group
                heading="Address"
                icon="fa-map-marker-alt"
                parh="Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                US"
            />

            <Group
                heading="Lets Talk"
                icon="fa-map-marker-alt"
                parh="+1 800 1236879"
            />

            <Group
                heading="Sale Support"
                icon="fa-map-marker-alt"
                parh="contact@example.com"
            />
        </Col>
    );
}
 
export default Address;