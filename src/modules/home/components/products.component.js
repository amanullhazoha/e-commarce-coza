import { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/productView.module.scss";
import Product from "./product.component";
import AddCartModal from "./addCartModal.component";
import { productActions } from "../../shop";

const Products = () => {
    const dispatch = useDispatch(); 

    const products = useSelector(state => state.productReducer.proudcts);
    const catagory = useSelector(state => state.productReducer.catagory);
    const sort = useSelector(state => state.productReducer.sort);
    const price = useSelector(state => state.productReducer.price);
    const color = useSelector(state => state.productReducer.color);
    const loadMore = useSelector(state => state.productReducer.loadMore);
    const [page, setPage] =useState(1);
    
    useEffect(() => {
        dispatch(productActions.getProducts(page));
    }, [page])

    const filterCatagory = () => {
        if (catagory.name.toLowerCase() === "all products") {
            return products;
        } else {
            const filterProducts = products.filter(
                (product) => product.catagory === catagory.name.toLowerCase()
            );
            return filterProducts;
        }
    };

    const sorting = (products) => {
        if(sort.name === "Default") {
            return products;
        } else {
           return  _.orderBy(products, [ sort.sortBy ], [ sort.sort ])
        }
    }

    const priceFilter = (products) => {
        if(price.name === "All") {
            return products;
        } else {
           const filtered =  products.filter(product => {
                if(product.price >= price.min && product.price <= price.max) {
                    return true;
                } 
                return false;
            })

            return filtered;
        }
    }

    const colorFilter = (products) => {
        if(color === "all") {
            return products;
        } else {
            const filtered = products.filter( product => {
                if(product.color.includes(color)) return true;
                return false;
            })
            
            return filtered;
        }
    }

    const filteringProducts = filterCatagory();
    const sorted = sorting(filteringProducts);
    const filteringPrice = priceFilter(sorted);
    const filterProducts = colorFilter(filteringPrice);

    return (
        <div className={classes.productView}>
            <Row>
                {filterProducts.map((product) => (
                    <Product
                        product={product}
                        key={product.id}
                        img={product.thumbnil}
                    />
                ))}
            </Row>

            {
                loadMore && (
                    <div className={classes.paginationBtn}>
                        <button type="button" onClick={() => setPage(prev => prev + 8)}>Load More</button>
                    </div>
                )
            }

            <AddCartModal />
        </div>
    );
};

export default Products;
