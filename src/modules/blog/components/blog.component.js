import { Container, Row } from "react-bootstrap";

import Banner from "../../core/components/banner.component";
import BlogAside from "./blog-aside.component";
import BlogContents from "./blog-contents.component";
import classes from "../style/blog.module.scss";

const BANNERBG = "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FblogBanner.webp?alt=media&token=cfd524e8-f743-468e-870a-e041c240ea49";


const Blog = () => {
    return (
        <>
            <Banner tilte="Blog" imgName={BANNERBG} />

            <div id={classes.mainSection}>
                <Container>
                    <Row>
                        <BlogContents />
                        <BlogAside />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Blog;
