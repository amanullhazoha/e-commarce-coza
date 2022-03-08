import { Col } from "react-bootstrap";
import classes from "../style/product.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../../shop";

const Product = ({ product, img }) => {
    const dispatch = useDispatch();

    const orderProducts = useSelector(state => state.productReducer.orderProducts);
    const orderProductModal = useSelector(state => state.productReducer.orderProductModal);

    const handleProduct = (product) => {
        const value = orderProducts.some(orderProduct => orderProduct.id === product.id);
        
        if(!value){
            dispatch(productActions.orderProduct(product));
            dispatch(productActions.orderModalToggler(orderProductModal));
        } else {
            const findProduct = orderProducts.find(orderProduct => orderProduct.id === product.id);

            dispatch(productActions.orderProduct(findProduct))
        }
    }

    return (
        <Col lg={3} sm={6} xs={12} className key={product.id}>
            <div className={classes.content}>
                <figure>
                    <img src={img} alt="product" className="img-fluid" />
                    <figcaption>
                        <button
                            type="button"
                            onClick={() =>handleProduct(product)}
                        >
                            Quick Veiw
                        </button>
                    </figcaption>
                </figure>
                <div className={classes.productTitle}>
                    <p>{product.name}</p>
                    <i className="far fa-heart" />
                </div>
                <div className={classes.price}>
                    <p>{product.price}</p>
                </div>
            </div>
        </Col>
    );
};

export default Product;
