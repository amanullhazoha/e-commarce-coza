import ButtonList from "../../core/components/buttonLIst.component";
import classes from "../style/blog-tag.module.scss";

const BUTTONVALUE = [
    {name: 'Fashion'}, 
    {name: 'Lifestyle'}, 
    {name: 'Denim'}, 
    {name: 'Streetstyle'}, 
    {name:'Crafts'}
];

const BlogTag = () => {
    return (
        <div className={classes.content}>
            <h3>Tags</h3>

            <ButtonList buttonValue={BUTTONVALUE} className={classes.tags} />
        </div>
    );
}
 
export default BlogTag;