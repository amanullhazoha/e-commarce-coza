import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";

import classes from "../style/addCartModal.module.scss";
import Model from "../../core/components/modal.component";
import { productActions } from "../../shop";


const AddCartModel = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(productActions.orderProduct(null))
        dispatch(productActions.orderModalToggler(orderProductModal))
    };

    const increment = () => {
        const updateOrderProduct = {...orderProduct}
        updateOrderProduct.quintity = updateOrderProduct.quintity + 1
        updateOrderProduct.totalPrice = Math.round(updateOrderProduct.price * updateOrderProduct.quintity * 100) / 100
        
        dispatch(productActions.orderProduct(updateOrderProduct));
    };

    const decrement = () => {
        const updateOrderProduct = {...orderProduct}
        updateOrderProduct.quintity = updateOrderProduct.quintity - 1
        updateOrderProduct.totalPrice = Math.round(updateOrderProduct.price * updateOrderProduct.quintity * 100) / 100
        
        dispatch(productActions.orderProduct(updateOrderProduct));
    };

    const handleThumbnil = (photo) => {
        const updateOrderProduct = {...orderProduct}
        updateOrderProduct.thumbnil = photo;
        
        dispatch(productActions.orderProduct(updateOrderProduct))
    }

    const handelSubmit = (values) => {
        const filterProducts = orderProducts.filter(product => product.id !== orderProduct.id)

        const updateOrderProduct = {...orderProduct};
        updateOrderProduct.ordered = values

        dispatch(productActions.orderProducts([updateOrderProduct, ...filterProducts]))
        dispatch(productActions.orderProduct(null));
        dispatch(productActions.orderModalToggler(orderProductModal))
    };

    const orderProduct = useSelector(state => state.productReducer.orderProduct);
    const orderProducts = useSelector(state => state.productReducer.orderProducts)
    const orderProductModal = useSelector(state => state.productReducer.orderProductModal)

    if (!orderProduct) return null;

    return (
        <Model
            modalContainerStyle={classes.modalStyle}
            modalViewStyle={classes.quickView}
            isOpen={orderProductModal}
        >
            <div className={classes.closeBtn}>
                <button type="button" onClick={handleClose}>
                    X
                </button>
            </div>
            <div className={classes.photoList}>
                {orderProduct.photo?.map((photo) => (
                    <figure key={photo}>
                        <img
                            src={photo}
                            alt="product"
                            className="img-fluid"
                            onClick={() => handleThumbnil(photo)}
                        />
                    </figure>
                ))}
            </div>

            <div className={classes.imgView}>
                <figure>
                    <img
                        src={orderProduct.thumbnil}
                        alt="product"
                        className="img-fluid"
                    />
                </figure>
            </div>

            <div className={classes.porductDitels}>
                <h2>{orderProduct.name}</h2>
                <p className={classes.price}>{orderProduct.totalPrice}</p>
                <p className={classes.discription}>{orderProduct.discription}</p>

                <div className={classes.chooseAndOrder}>
                    <Formik 
                        initialValues={{ size: "", color: "" }}
                        onSubmit={(values, action) => {
                            handelSubmit(values)
                            action.setSubmitting(false);
                        }}
                    >
                        {(formikProps) => (
                            <Form onSubmit={formikProps.handleSubmit}>
                                <label htmlFor="size">
                                    Size
                                    <Field
                                        id="size"
                                        as="select"
                                        name="size"
                                    >
                                        <option>Choose</option>
                                        {orderProduct.size.map((s) => (
                                            <option value={s} key={s}>Size {s}</option>
                                        ))}
                                    </Field>
                                </label>

                                <label htmlFor="color">
                                    Color
                                    <Field 
                                        as="select"
                                        id="Color"
                                        name="color"
                                    >
                                        <option>Choose</option>
                                        {orderProduct.color.map((c) => (
                                            <option value={c} key={c}>Size {c}</option>
                                        ))}
                                    </Field>
                                </label>

                                <div className={classes.quintityBtn}>
                                    <table>
                                        <td>
                                            <button
                                                type="button"
                                                disabled={orderProduct.quintity === 1 && true}
                                                onClick={decrement}
                                            >
                                                -
                                            </button>
                                        </td>
                                        <td>
                                            <p>{orderProduct.quintity}</p>
                                        </td>
                                        <td>
                                            <button
                                                type="button"
                                                onClick={increment}
                                            >
                                                +
                                            </button>
                                        </td>
                                    </table>
                                </div>

                                <div className={classes.addCartBtn}>
                                    <button type="submit">Add To Cart</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className={classes.icon}>
                        <ul>
                            <li>
                                <i className="far fa-heart" />
                            </li>
                            <li>
                                <a href="www.facebook.com" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="www.twitter.com" target="_blank">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="www.google-plus.com" target="_blank">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Model>
    );
};

export default AddCartModel;
