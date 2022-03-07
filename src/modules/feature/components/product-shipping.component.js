import { Col } from "react-bootstrap";

import classes from "../style/product-shipping.module.scss";

const ProductShipping = () => {
    return (
        <Col className lg={4}>
            <div className={classes.content}>
                <h3>CART TOTALS</h3>
                <div className={classes.price}>
                    <p className={classes.textBold}>Subtotal:</p>
                    <span>$79.53</span>
                </div>

                <div className={classes.shipping}>
                    <p className={classes.textBold}>Shipping:</p>
                    <div className={classes.address}>
                        <p>
                            There are no shipping methods available. Please double check
                            your address, or contact us if you need any help.
                        </p>
                        <span>CALCULATE SHIPPING</span>
                        <form>
                            <select>
                                <option>Select a Country</option>
                                <option value="Select a Country">USA</option>
                                <option value="Select a Country">UK</option>
                                <option value="Select a Country">BN</option>
                            </select>
                            <input type="text" placeholder="state/country" />
                            <input type="text" placeholder="postcode/zip" />
                            <button type="submit">update totals</button>
                        </form>
                    </div>
                </div>

                <div className={classes.checkOut}>
                    <div className={classes.total}>
                        <p className={classes.textBold}>total:</p>
                        <span>$79.53</span>
                    </div>
                    <button type="button">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </Col>
    );
}
 
export default ProductShipping;