import { Container, Row } from "react-bootstrap";

import OrderProductView from "./orderProductView.component";
import ProductShipping from "./product-shipping.component";
import classes from "../style/feature.module.scss";

const Feature = () => {
    return (
        <main id={classes.mainSection}>
            <Container>
                <Row>
                    <OrderProductView />
                    <ProductShipping />
                </Row>
            </Container>
        </main>
    );
}
 
export default Feature;