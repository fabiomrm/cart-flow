import { Action, CartActions, State } from "../context/CartContext";

export const cartReducer = (state: State, action: Action) => {
    switch(action.type) {
        case CartActions.ADD_TO_CART:
            return {...state, cart: [...state.cart, {...action.payload, qtd: 1}]};
        case CartActions.REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(p => p.id  !== action.payload.id)};
        case CartActions.CHANGE_CART_QTD:
            return {...state, 
                cart: state.cart
                    .filter(p => p.id === action.payload.product.id ? p.qtd = action.payload.qtd : p.qtd)
            }

        default:
            return state;
    }
} 