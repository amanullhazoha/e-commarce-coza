import { Link } from "react-router-dom";
import classes from "../style/blog-categories.module.scss";

const CATEGORIES = [
    {link: "shop", tag: "Fashion"},
    {link: "shop", tag: "Beauty"},
    {link: "shop", tag: "Street Style"},
    {link: "shop", tag: "Life Style"},
    {link: "shop", tag: "DIY & Crafts"}
]

const BlogCategories = () => {

    return (
        <div className={classes.content}>
            <h3>Categories</h3>
            <ul className={classes.catagorie}>
                {CATEGORIES.map(categorie => (
                    <Link to={`/${categorie.link}`} key={categorie.tag}>
                        <li>{categorie.tag}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
 
export default BlogCategories;