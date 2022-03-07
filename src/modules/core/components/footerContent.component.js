import { Col } from "react-bootstrap";

const FooterContent = ({ className, header, children }) => {
    return (
        <Col className={className} lg={3} sm={6} xs={12}>
                <h3>{header}</h3>   
                {children}  
        </Col>
    );
}
 
export default FooterContent;