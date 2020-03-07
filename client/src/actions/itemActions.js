import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';

export const getItems = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('/api/items')
    .then(res => dispatch({
        type:GET_ITEMS,
        payload: res.data
    })
    )
};

export const addItem = item => dispatch =>{
    axios.post('/api/items', item)
};

export const deleteItem = (id) =>{
    return {
        type: DELETE_ITEMS,
        payload: id
    };
};



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}