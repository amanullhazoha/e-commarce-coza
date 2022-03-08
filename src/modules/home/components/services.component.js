import { Container, Row } from "react-bootstrap";

import classes from "../style/services.module.scss";
import Service from "./service.component";

const DATA = [
    { heading: 'Women', tilte: 'Spring 2021', img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fservices1.webp?alt=media&token=e8de1065-b473-4266-ac27-28691632642f" },
    { heading: 'Men', tilte: 'Spring 2021', img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fservices2.webp?alt=media&token=302e7f3a-a975-4313-b9a7-1f424f34430f" },
    { heading: 'Accessories', tilte: 'New Trend', img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fservices3.webp?alt=media&token=3b53fc47-d56a-429e-8cf6-e7bc1d156f02" },
];

const Services = () => {
    return (
        <section id={classes.services}>
        <Container>
            <Row>
                {DATA.map((data) => (
                    <Service data={data} key={data.heading} />
                ))}
            </Row>
        </Container>
    </section>
    );
}
 
export default Services;