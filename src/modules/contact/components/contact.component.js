import { Col, Row, Container } from "react-bootstrap";

import Banner from "../../core/components/banner.component";
import ContactForm from "./contact-form.component";
import Address from "./address.component";
import Map from "./map.component";
import classes from "../style/contact.module.scss";

const BANNERBG = "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FblogBanner.webp?alt=media&token=cfd524e8-f743-468e-870a-e041c240ea49";

const Contact = () => {
    return (
        <>
            <Banner imgName={BANNERBG} tilte="contact" />

            <div id={classes.mainSection}>
                <Container>
                    <Col className={classes.content}>
                        <Row>
                            <ContactForm />
                            <Address />
                        </Row>
                    </Col>
                </Container>
            </div>

            <Map />
        </>
    );
}
 
export default Contact;