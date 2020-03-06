import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';

export const getItems = () =>{
    return {
        type: GET_ITEMS
    };
};

export const deleteItem = (id) =>{
    return {
        type: DELETE_ITEMS,
        payload: id
    };
};

export const addItem = item =>{
    return {
        type: ADD_ITEMS,
        payload: item
    };
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}