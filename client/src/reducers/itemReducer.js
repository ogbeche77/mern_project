// The reducer is where item state goes
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false //should be boolean, initially set to first
   
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,  
                loading: false
               
            };
            case DELETE_ITEMS:
                return {
                    ...state,
                    items: state.items.filter(item =>item._id !==action.payload )
                };
            case ADD_ITEMS:
                return{
                    ...state, //spread operator ... is used to get current state
                    items: [action.payload, ...state.items]
                }; 
                case ITEMS_LOADING:
                    return {
                        ...state,
                        loading: true
                    };
               
            default:
                return state;
    }
}
