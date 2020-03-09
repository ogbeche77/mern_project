import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';

export const getItems = () =>{
    return {
        type:GET_ITEMS
          };
    };

export const deleteItems = (id) =>{
    return {
        type: DELETE_ITEMS,
        payload: id //we send a payload, so id get deleted
    };
};

export const addItem = item =>{
    return {
        type:ADD_ITEMS,
        payload: item
    };
};
