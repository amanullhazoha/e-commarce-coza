import { Link } from "react-router-dom";

import Modal from "./modal.component";
import classes from "../style/sideModal.module.scss";

const SideModal = ({ orderProducts, toggler, totalAmount, removeProduct }) => {
    return (
        <Modal modalViewStyle={classes.modelStyle} style={{ display: "block"}}>
            <div className={classes.heading}>
                <h3>Your Cart</h3>
                <button type="button" onClick={() => toggler(prev => !prev)}>
                    <i className="fas fa-times" />
                </button>
            </div>

            {orderProducts.map(product => (
                <div className={classes.addCartList}>
                    <figure>
                        <img src={product.thumbnil} className="img-fluid" alt="product" />
                    </figure>

                    <div className={classes.productName}>
                        <p>{product.name}</p>
                        <p>
                            {product.quintity} x {product.price}
                        </p>
                        <p>
                            <span style={{ fontWeight: '600' }}>Total:</span> {product.totalPrice}
                        </p>
                    </div>
                    <button type="button" onClick={() => removeProduct(product.id)}>
                        <i className="fas fa-times" />
                    </button>
                </div>
            ))}

            <div className={classes.totalValue}>
                <h3>Total: ${totalAmount}</h3>
                <div className={classes.checkOut}>
                    <Link to="/feature">
                        <button type="button" onClick={() => toggler(prev => !prev)}>View Cart</button>
                    </Link>

                    <Link to="/feature">
                        <button type="button" onClick={() => toggler(prev => !prev)}>Check Out</button>
                    </Link>
                </div>
            </div>
        </Modal>
    );
}
 
export default SideModal;