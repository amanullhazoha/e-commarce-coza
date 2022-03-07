import { Col } from "react-bootstrap";

import BlogCategories from "./blog-categories.component";
import Featured from "./featured.component";
import Arcrive from "./arcrive.component";
import BlogTag from "./blog-tag.component";
import classes from "../style/blog-aside.module.scss";

const BlogAside = () => {
    return (
        <Col md={3}>
            <div className={classes.contentAside}>
                <input type="text" placeholder="Search" />

                <BlogCategories />
                <Featured />
                <Arcrive />
                <BlogTag />
            </div>
        </Col>
    );
}
 
export default BlogAside;