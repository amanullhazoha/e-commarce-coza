import { Col } from "react-bootstrap";

import classes from "../style/image-box.module.scss";

const ImageBox = ({ image }) => (
    <Col className={classes.content} lg={4}>
        <figure>
            <div className={classes.position}>
                <img src={image} alt="about" className="img-fluid" />
            </div>
        </figure>
    </Col>
);

export default ImageBox;