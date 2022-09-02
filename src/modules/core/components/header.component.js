import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/navbar.module.scss";
import SideModal from "./sideModal.component";
import { productActions } from "../../shop"
import { userAction } from "../../user"

const Header = () => {
    const dispatch = useDispatch();
    
    const orderProducts = useSelector(state => state.productReducer.orderProducts);
    const loggedInUser = useSelector(state => state.userReducer.loggedInUser);
    const [isOpen, setIsOpen] = useState(false);
    const [showSide, setShowSide] = useState(false);

    const handleremoveOrderProduct = (id) => {
        const orderProductRemove = orderProducts.filter(product => product.id !== id);

        dispatch(productActions.orderProductRemove(orderProductRemove))
    }

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
                            <li onClick={() => setShowSide(prev => !prev)}>
                                <i className="fas fa-shopping-cart" />
                                <p>{orderProducts.length}</p>
                            </li>
                            <li>
                                <i className="far fa-heart" />
                                <p>0</p>
                            </li>
                            <li style={{ marginRight: "10px" }}>    
                                <h4 style={{ color: "#6C7AE0", textTransform: "capitalize" }}>{loggedInUser?.displayName}</h4>
                            </li>
                            <li onClick={() => dispatch(userAction.logout())}>
                                <i className="fas fa-sign-in-alt" />
                            </li>
                            
                            <button
                                type="button"
                                className={classes.active}
                                onClick={() => setIsOpen((prevState) => !prevState)}
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
