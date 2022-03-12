import { FilterAction, FilterActions, FilterState, initialFilterData } from "../context/CartContext";

export const filterReducer = (state: FilterState, action: FilterAction) => {
    switch(action.type) {

        case FilterActions.FILTER_BY_PRICE:
            return {...state, sort: action.payload };
        case FilterActions.FILTER_BY_STOCK:
            return {...state, byStock: !state.byStock };
        case FilterActions.FILTER_BY_FAST_DELIVERY:
            return {...state, byFastDelivery: !state.byFastDelivery };
        case FilterActions.FILTER_BY_RATING:
            return {...state, byRating: action.payload };
        case FilterActions.FILTER_QUERY:
            return {...state, searchQuery: action.payload };
        case FilterActions.CLEAR_FILTERS:
            return initialFilterData;
        default:
            return state;
    }
} 