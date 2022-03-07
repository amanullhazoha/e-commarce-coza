import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import classes from "../style/footer.module.scss";
import FooterTop from "./footerTop.component";
import usePayment from "../hooks/payment.hook";

const Footer = () => {
    const { payment } = usePayment();

    return (
        <footer>
            <Container>
                <FooterTop />

                <div className={classes.footerBottom}>
                    <div className={classes.paymentMethod}>
                        {payment.map((item) => (
                            <Link to="/about" key={item}>
                                <img src={item} alt={item} />
                            </Link>
                        ))}
                    </div>
                    <p>
                        Copyright ©2021 All rights reserved | This template is
                        made with <span>&#9825;</span> by{" "}
                        <Link to="/">Colorlib</Link>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
