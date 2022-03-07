import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "../style/filterBar.module.scss";
import ButtonList from "../../core/components/buttonLIst.component";
import { productActions } from "../../shop";
import Filter from "./filter.component";

const FILTERVALUE = [
    {name: 'All Products'}, 
    {name: 'Women'}, 
    {name: 'Men'}, 
    {name: 'Bag'}, 
    {name: 'Shoes'}, 
    {name: 'Watches'}
];

const FilterBar = () => {
    const dispatch = useDispatch();

    const catagory = useSelector(state => state.productReducer.catagory);
    const [toggler, setToggler] = useState(false);

    const handleCatagoryFilter = (value) => {
        dispatch(productActions.filterProductCatagory(value));
    }

    return (
        <>
            <div className={classes.filterBar}>
                <ButtonList
                    buttonValue={FILTERVALUE}
                    handelFilter={handleCatagoryFilter}
                    isActive={catagory.name}
                />

                <div className={classes.search}>
                    <button type="button" className={classes.searchBtn} onClick={() => setToggler(prev => !prev)}>
                        <i className="fas fa-filter" />
                        Filter
                    </button>
                </div>
            </div>

            <Filter toggler={toggler} />
        </>
    );
}
 
export default FilterBar;