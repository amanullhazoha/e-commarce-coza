import classes from "../style/blog-content.module.scss";

const BlogContent = ({ blogcontent}) => {
    return (
        <div className={classes.content}>
            <a href="-">
                <figure>
                    <img src={blogcontent.image} alt="blog" className="img-fluid" />

                    <figcaption>
                        <p>22</p>
                        <span>Jan 2018</span>
                    </figcaption>
                </figure>
            </a>

            <a href="-">
                <h2>The Great Big List of Men’s Gifts for the Holidays</h2>
            </a>

            <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                sapien eu varius
            </p>

            <div className={classes.author}>
                <ul>
                    <li>By Admin</li>
                    <li>StreetStyle, Fashion, Couple</li>
                    <li>8 Comments</li>
                </ul>

                <a href="-">
                    <button type="button">
                        CONTINUE READING
                        <i className="fas fa-long-arrow-alt-right" />
                    </button>
                </a>
            </div>
        </div>
    );
}
 
export default BlogContent;