import Types from "./product.types";

const initialState = {
    proudcts: [],
    loadMore: true,
    catagory: { name: "All Products" },
    price: { name: "All"},
    color: "all",
    tag: { name : "All" },
    sort: { name: "Default" },
    toggler: false,
    orderProduct: null,
    orderProducts: [],
    orderProductModal: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.GET_PRODUCTS_FULFILLED: {
            const snapshort = action.payload;
            
            if(snapshort.exists()){
                return { ...state, proudcts: [...Object.values(snapshort.val())], loadMore: true }
            } else {
                return { ...state, loadMore: false }
            }
        }
        case Types.FILTER_PRODUCT_BY_CATAGORY: {
            return { ...state, catagory: action.payload }
        }
        case Types.FILTER_PRODUCT_BY_PRICE: {
            return { ...state, price: action.payload }
        }
        case Types.FILTER_PRODUCT_BY_COLOR: {
            return { ...state, color: action.payload }
        }
        case Types.FILTER_PRODUCT_BY_TAG: {
            return { ...state, tag: action.payload }
        }
        case Types.PRODUCT_SORT: {
            return { ...state, sort: action.payload }
        }
        case Types.FILTER_TOGGLER: {
            return { ...state, toggler: action.payload }
        }
        case Types.ORDER_PRODUCT: {
            return { ...state, orderProduct: action.payload }
        }
        case Types.ORDER_PRODUCTS: {
            return { ...state, orderProducts: action.payload }
        }
        case Types.ORDER_PRODUCT_REMOVE: {
            return { ...state, orderProducts: action.payload }
        }
        case Types.ORDER_PRODUCT_MODAL: {
            return { ...state, orderProductModal: action.payload }
        }
        default:
            return state;
    }
}

export default reducer;