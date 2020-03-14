import axios from "axios";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading()); // calling setItemsLoading
    axios.get("/api/items")  //we make our request to the backend, proxy added already in package.json
    .then(res =>
         dispatch({  // response/ promise 
             type: GET_ITEMS,
             payload: res.data  //data that comes from the backend, when we hit the route so it returns json format
         }))
         .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
         );
    };

    export const addItem = item => (dispatch, getState) =>{
       axios
       .post("/api/items", item, tokenConfig(getState))
       .then(res => 
        dispatch({
            type: ADD_ITEMS,
            payload: res.data

        })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
         );
    };

export const deleteItems = id => (dispatch, getState) =>{
   axios.delete(`/api/items/${id}`, tokenConfig(getState)).then(res =>
    dispatch({
        type: DELETE_ITEMS,
        payload: id
    })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
         );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}
