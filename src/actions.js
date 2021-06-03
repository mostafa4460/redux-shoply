import {ADD_ITEM, REMOVE_ITEM} from './actionTypes';

export const addItem = (id, item) => {
    return {
        type: ADD_ITEM,
        payload: { id, item }
    };
};

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        payload: { id }
    };
};