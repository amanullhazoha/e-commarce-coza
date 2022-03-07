import { Button, Row, Form } from "react-bootstrap";
import classes from "../style/footerTop.module.scss";
import FooterContent from "./footerContent.component";
import Navigations from "./navLink.component";
import SocailIcons from "./socailIcons.component";

const categoriesNav = [
    { link: "/shop", name: "Women" },
    { link: "/shop", name: "Men" },
    { link: "/shop", name: "Shoes" },
    { link: "/shop", name: "Watches" },
];

const helpNav = [
    { link: "/about", name: "Track Order" },
    { link: "/about", name: "Returns" },
    { link: "/about", name: "Shipping" },
    { link: "/about", name: "FAQs" },
];

const FooterTop = () => (
    <div className={classes.footerTop}>
        <Row>
            <FooterContent className={classes.content} header="CATEGORIES">
                <Navigations navigations={categoriesNav} />
            </FooterContent>

            <FooterContent className={classes.content} header="HELP">
                <Navigations navigations={helpNav} />
            </FooterContent>

            <FooterContent className={classes.content} header="GET IN TOUCH">
                <p>
                    Any questions? Let us know in store at 8th floor, 379 Hudson
                    St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
                <SocailIcons className={classes.socailIcon} />
            </FooterContent>

            <FooterContent className={classes.content} header="NEWSLETTER">
                <Form>
                    <input type="email" placeholder="email@example.com" />
                    <div className={classes.borderStyle} />
                    <Button type="submit">SUBSCRIBE</Button>
                </Form>
            </FooterContent>
        </Row>
    </div>
);

export default FooterTop;
