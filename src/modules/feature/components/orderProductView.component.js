import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import TableBody from "../../core/components/table-body.component";
import TableHead from "../../core/components/table-head.component";
import Table from "../../core/components/table.component";
import OrderCheckOut from "./orderCheckOut.component";
import classes from "../style/order-product-view.module.scss";
import { productActions } from "../../shop";

const OrderProductView = () => {
    const dispatch = useDispatch();

    const orderProducts = useSelector(state => state.productReducer.orderProducts)

    const columns = [
        {
            label: "product",
            path: "thimbnil",
            content: (item) => (
                <td>
                    <div className={classes.productDesign}>
                        <img
                            src={item.thumbnil}
                            alt="product"
                            className="img-fluid"
                        />
                        <p>{item.title}</p>
                    </div>
                </td>
            ),
        },
        {
            label: "price",
            path: "price",
            content: (item) => <td>{item.price}</td>,
        },
        {
            label: "quantity",
            path: "quantity",
            content: (item) => (
                <td>
                    <div className={classes.countingBtn}>
                        <button type="button" onClick={() => item.quintity > 1 && decrement(item.id)}>-</button>
                        <p>{item.quintity}</p>
                        <button type="button" onClick={() => increment(item.id)}>+</button>
                    </div>
                </td>
            ),
        },
        {
            label: "total",
            path: "totalPrice",
            content: (item) => <td>{item.totalPrice}</td>,
        },
    ];

    const increment = (id) => {
        const updateOrderProducts = [...orderProducts];

        const findProduct = updateOrderProducts.find(product => product.id === id);
        const index = updateOrderProducts.findIndex(product => product.id === id);
        findProduct.quintity = findProduct.quintity + 1;
        findProduct.totalPrice = Math.round(findProduct.price * findProduct.quintity * 100) / 100
        
        updateOrderProducts.splice(index, 1, findProduct);
        dispatch(productActions.orderProducts(updateOrderProducts));
    };

    const decrement = (id) => {
        const updateOrderProducts = [...orderProducts];

        const findProduct = updateOrderProducts.find(product => product.id === id);
        const index = updateOrderProducts.findIndex(product => product.id === id);
        findProduct.quintity = findProduct.quintity - 1;
        findProduct.totalPrice = Math.round(findProduct.price * findProduct.quintity * 100) / 100
        
        updateOrderProducts.splice(index, 1, findProduct);
        dispatch(productActions.orderProducts(updateOrderProducts));
    };

    return (
        <Col className={classes.tableContent} lg={8}>
            <Table>
                <TableHead columns={columns} />
                <TableBody items={orderProducts} columns={columns} />

                <thead className={classes.couponeCode}>
                    <tr>
                        <td>
                            <input type="text" placeholder="Coupon Code" />
                        </td>

                        <td colSpan="3">
                            <OrderCheckOut />
                        </td>
                    </tr>
                </thead>
            </Table>
        </Col>
    );
};

export default OrderProductView;
