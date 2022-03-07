import classes from "../style/mainSection.module.scss";
import Carousel from "./carousel.component";
import ProductOverView from "./productOverview.component";
import Services from "./services.component";

const MainSection = () => {
    return (
        <main id={classes.mainSection}>
            <Carousel />
            <Services />
            <ProductOverView className={classes.products} />
        </main>
    );
};

export default MainSection;
