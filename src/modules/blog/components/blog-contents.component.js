import { Col } from "react-bootstrap";
import BlogContent from "./blog-content.component";

const BLOGCONTENTS = [
    {
        image: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fblog1.webp?alt=media&token=d53a953e-ef28-4279-8753-0bfbed526d56",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fblog2.webp?alt=media&token=ecd1742e-d4ac-482f-80cc-fd7bcce6944c",
    },
    {
        image: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fblog3.webp?alt=media&token=79c01c88-77c1-4273-9b5d-3fa85fe172b5",
    }
]

const BlogContents = () => {
    return (
        <Col md={9}>
            {BLOGCONTENTS.map(blogcontent => (
                <BlogContent blogcontent={blogcontent} key={blogcontent.image} />
            ))}
        </Col>
    );
}
 
export default BlogContents;