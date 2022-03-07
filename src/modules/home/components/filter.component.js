import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";

import classes from "../style/filter.module.scss";
import ButtonList from "../../core/components/buttonLIst.component";
import ColorFilter from "./colorFilter.component";
import FilteringContent from "./filteringContent.component";
import { productActions } from "../../shop";

const SORT = [
    {
        name: "Default",
    },
    {
        name: "Popularity",
        sortBy: "quintity",
        sort: "asc",
    },
    {
        name: "Average rating",
        sortBy: "price",
        sort: "asc",
    },
    {
        name: "Newness",
        sortBy: "id",
        sort: "asc",
    },
    {
        name: "Price: Low to High",
        sortBy: "price",
        sort: "asc",
    },
    {
        name: "Price: High to Low",
        sortBy: "price",
        sort: "desc",
    }
]

const PRICE = [
    {
        name: "All",
    },
    {
        name: "$0.00 - $50.00",
        min: 0,
        max: 50,
    },
    {
        name: "$50.00 - $100.00",
        min: 50,
        max: 100,
    },
    {
        name: "$100.00 - $150.00",
        min: 100,
        max: 150,
    },
    {
        name: "$150.00 - $200.00",
        min: 150,
        max: 200,
    },
    {
        name: "$200.00+",
        min: 200,
        max: 10000,
    }
]

const COLOR = ['all', 'black', 'blue', 'grey', 'green', 'red', 'white'];

const TAGS = [
    { name: "All" },
    { name: "Fashion" },
    { name: "Lifestyle" },
    { name: "Denim" },
    { name: "Newness" },
    { name: "Streetstyle" },
    { name: "Crafts" }
]

const Filter = ({ toggler }) => {
    const dispatch = useDispatch();

    const sort = useSelector(state => state.productReducer.sort);
    const price = useSelector(state => state.productReducer.price);
    const color = useSelector(state => state.productReducer.color);
    const tag = useSelector(state => state.productReducer.tag);

    const handleSort = (value) => {
        dispatch(productActions.productSort(value));
    }

    const handlePriceFilter = (value) => {
        dispatch(productActions.filterProductPrice(value));
    }

    const handleColorFilter = (value) => {
        dispatch(productActions.filerProductColor(value));
    }

    const handleTagFilter = (value) => {
        dispatch(productActions.filterProductTag(value))
    }

    return (
        <Container className={classes.filter} style={{ display: toggler ? "block" : "none" }}>
            <div className={classes.content}>
                <Row>
                    <FilteringContent heading="Sort By">
                        <ButtonList 
                            buttonValue={SORT} 
                            handelFilter={handleSort}
                            isActive={sort.name}  
                        />
                    </FilteringContent>

                    <FilteringContent heading="Price">
                        <ButtonList 
                            buttonValue={PRICE} 
                            handelFilter={handlePriceFilter}
                            isActive={price.name}
                        />
                    </FilteringContent>

                    <FilteringContent heading="Color">
                        <ColorFilter 
                            className={classes.color} 
                            buttonValue={COLOR} 
                            handleFilter={handleColorFilter}
                            isActive={color}
                        />
                    </FilteringContent>

                    <FilteringContent heading="Tags">
                        <ButtonList 
                            className={classes.tags} 
                            buttonValue={TAGS} 
                            handelFilter={handleTagFilter}
                            isActive={tag.name}
                        />
                    </FilteringContent>
                </Row>
            </div>
        </Container>
    );
};

export default Filter;
