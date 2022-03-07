import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/navbar.module.scss";
import SideModal from "./sideModal.component";
import { productActions } from "../../shop"

const Header = () => {
    const dispatch = useDispatch();
    
    const [isOpen, setIsOpen] = useState(false);
    const [showSide, setShowSide] = useState(false);

    const menuToggle = () => setIsOpen((prevState) => !prevState);

    const handleremoveOrderProduct = (id) => {
        const orderProductRemove = orderProducts.filter(product => product.id !== id);

        dispatch(productActions.orderProductRemove(orderProductRemove))
    }

    const orderProducts = useSelector(state => state.productReducer.orderProducts);

    const totalValue = Math.round(orderProducts.reduce((prev, curr) => prev + curr.totalPrice, 0) * 100) / 100;
    
    return (
        <header>
            <div className={classes.navFixed}>
                <nav style={{ height: isOpen && "303px" }}>
                    <div className={`container ${classes.content}`}>
                        <div className={classes.leftSection}>
                            <div className={classes.logo}>
                                <Link to="/">
                                    <h1>
                                        coza <span>store</span>
                                    </h1>
                                </Link>
                            </div>

                            <ul
                                className={classes.navLink}
                                style={{ display: isOpen && "block" }}
                            >
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>Home</li>
                                </NavLink>
                                <NavLink
                                    to="/shop"
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>Shop</li>
                                </NavLink>
                                <NavLink
                                    to="/feature"
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>Feature</li>
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>Blog</li>
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>About</li>
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? classes.select : ''}
                                >
                                    <li>Contact</li>
                                </NavLink>
                            </ul>
                        </div>

                        <ul className={classes.navIcon}>
                            <li>
                                <i className="fas fa-sign-in-alt" />
                            </li>
                            <li onClick={() => setShowSide(prev => !prev)}>
                                <i className="fas fa-shopping-cart" />
                                <p>{orderProducts.length}</p>
                            </li>
                            <li>
                                <i className="far fa-heart" />
                                <p>0</p>
                            </li>
                            <button
                                type="button"
                                className={classes.active}
                                onClick={menuToggle}
                            >
                                <i
                                    className={`fas ${
                                        isOpen ? "fa-times" : "fa-bars"
                                    }`}
                                />
                            </button>
                        </ul>
                    </div>
                </nav>
            </div>

            {
                showSide && (
                    <SideModal 
                        orderProducts={orderProducts} 
                        toggler={setShowSide} 
                        removeProduct={handleremoveOrderProduct}
                        totalAmount={totalValue}
                    />
                )
            }
        </header>
    );
};

export default Header;
