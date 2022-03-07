import Types from "./product.types";

import { get, limitToFirst, orderByKey, query, ref, startAt  } from "firebase/database";
import { db } from "../../firebase";

export const getProducts = (page) => {
    const productsRef = ref(db, "products");
    const productsQuery = query(productsRef, orderByKey(), startAt(`${page}`), limitToFirst(8));

    return {
        type: Types.GET_PRODUCTS,
        payload: get(productsQuery)
    }
}

export const pagination = (value) => {
    return {
        type: Types.PAGINATION,
        payload: value,
    }
}

export const filterProductCatagory = (value) => {
    return {
        type: Types.FILTER_PRODUCT_BY_CATAGORY,
        payload: value,
    }
}

export const filterProductPrice = (value) => {
    return {
        type: Types.FILTER_PRODUCT_BY_PRICE,
        payload: value,
    }
}

export const filerProductColor = (value) => {
    return {
        type: Types.FILTER_PRODUCT_BY_COLOR,
        payload: value,
    }
}

export const filterProductTag = (value) => {
    return {
        type: Types.FILTER_PRODUCT_BY_TAG,
        payload: value,
    }
}

export const productSort = (value) => {
    return {
        type: Types.PRODUCT_SORT,
        payload: value,
    }
}

export const filterToggler = (value) => {
    return {
        type: Types.FILTER_TOGGLER,
        payload: !value,
    }
}

export const orderProduct = (value) => {
    return {
        type: Types.ORDER_PRODUCT,
        payload: value
    }
}

export const orderModalToggler = (value) => {
    return {
        type: Types.ORDER_PRODUCT_MODAL,
        payload: !value,
    }
}

export const orderProducts = (value) => {
    return {
        type: Types.ORDER_PRODUCTS,
        payload: value,
    }
}

export const orderProductRemove = (value) => {
    return {
        type: Types.ORDER_PRODUCT_REMOVE,
        payload: value,
    }
}
