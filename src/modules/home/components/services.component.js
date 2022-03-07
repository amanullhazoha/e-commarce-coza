import { Container, Row } from "react-bootstrap";
import classes from "../style/services.module.scss";
import Service from "./service.component";

const service1 = "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fservices1.webp?alt=media&token=e8de1065-b473-4266-ac27-28691632642f";

const DATA = [
    { heading: 'Women', tilte: 'Spring 2021', img: service1 },
    { heading: 'Men', tilte: 'Spring 2021', img: service1 },
    { heading: 'Accessories', tilte: 'New Trend', img: service1 },
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