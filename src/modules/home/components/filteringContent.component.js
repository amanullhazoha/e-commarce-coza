import { Col } from "react-bootstrap";

const FilteringContent = ({ heading, children }) => (
    <Col lg={3} sm={6} xs={12} className="mb-4">
        <h3>{heading}</h3>
        {children}
    </Col>
);
 
export default FilteringContent;