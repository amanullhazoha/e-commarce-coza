import { ProductOverView } from "../home/index";
import productReducer from "./product.reducr";
import * as productActions from "./product.actions";

const Shop = () => {
    return(
        <ProductOverView />
    )
};

export { Shop, productReducer, productActions };