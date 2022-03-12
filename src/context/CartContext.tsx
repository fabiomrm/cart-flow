import { createContext, useContext, useReducer } from "react";
import { products } from "../faker/faker";
import { cartReducer } from "../reducer/cartReducer";
import { filterReducer } from "../reducer/filterReducer";
import { Filter } from "../types/Filter";
import { Product } from "../types/Product";


export type State = {
    products: Product[];
    cart: [] | Product[];
}

export type FilterState = Filter;

export enum CartActions {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_CART_QTD
}

export enum FilterActions {
    FILTER_BY_PRICE,
    FILTER_BY_STOCK,
    FILTER_BY_FAST_DELIVERY,
    FILTER_BY_RATING,
    FILTER_QUERY,
    CLEAR_FILTERS
}

export type Action = {
    type: CartActions;
    payload?: any;
}

export type FilterAction = {
    type: FilterActions,
    payload?: any;
}

const initialData: State = {
    products: products,
    cart: [],
};

export const initialFilterData: FilterState = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    sort: "",
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
    filterState: FilterState;
    filterDispatch: (action: FilterAction) => void;
}

const Context = createContext<ContextType | undefined>(undefined);



export const CartContext: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialData);

    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterData);


    const value = { state, dispatch , filterState, filterDispatch }

    return <Context.Provider value={value}>{ children }</Context.Provider>
}

export const useCart = () => {
    const context = useContext(Context);
    if(context === undefined) {
        throw new Error ("useCart used outside provider");
    }
    return context;
}