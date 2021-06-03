import data from './data.json';
import {ADD_ITEM, REMOVE_ITEM} from './actionTypes';

const INITIAL_STATE = { products: data.products, cart: {} };
const rootReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (state.cart[action.payload.id]) {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        [action.payload.id]: { 
                            ...state.cart[action.payload.id],
                            qty: state.cart[action.payload.id].qty + 1
                        }
                    }
                };
            } else {
                return {
                    ...state, 
                    cart: {
                        ...state.cart,
                        [action.payload.id]: action.payload.item
                    }
                };
            };
        case REMOVE_ITEM:
            if (state.cart[action.payload.id].qty === 1) {
                const newCart = {...state.cart};
                delete newCart[action.payload.id];
                return {
                    ...state, 
                    cart: newCart
                };
            } else {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        [action.payload.id]: { 
                            ...state.cart[action.payload.id],
                            qty: state.cart[action.payload.id].qty - 1
                        }
                    }
                };
            };
        default:
            return state
    };
};

export default rootReducer;