import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "../style/services.module.scss";

const Service = ({ data }) => {
    return (
        <Col className={classes.content} lg={4} sm={6} xs={12} >
            <Link to="/shop">
                <figure>
                    <div className={classes.overly} />
                    <img
                        src={data.img}
                        alt="services"
                        className="img-fluid"
                    />
                    <figcaption>
                        <div className={classes.top}>
                            <h3>{data.heading}</h3>
                            <p>{data.tilte}</p>
                        </div>

                        <div className={classes.bottom}>
                            {/* <Link to="/shop">Shop Now</Link> */}
                            <span>Shop Now</span>
                            <div className={classes.border} />
                        </div>
                    </figcaption>
                </figure>
            </Link>
        </Col>
    );
};

export default Service;
