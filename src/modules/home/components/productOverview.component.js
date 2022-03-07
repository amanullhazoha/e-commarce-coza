import { Container } from "react-bootstrap";

import FilterBar from "./filterBar.component";
import Filter from "./filter.component";
import Products from "./products.component";

import { useLocation } from "react-router-dom";

const ProductOverView = ({ className }) => {
    const { pathname } = useLocation();

    return (
        <section id={className}>
            <Container>
                {pathname !=="/shop" && <h1>PRODUCT OVERVIEW</h1>}
                <FilterBar />
                <Filter />
                <Products />
            </Container>
        </section>
    );
};

export default ProductOverView;
