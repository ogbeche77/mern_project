import  {v4 as uuidv4} from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [
    { id: uuidv4(), name:"Soap" },
    { id: uuidv4(), name:"Sink" },
    { id: uuidv4(), name:"Sponge" },
    { id: uuidv4(), name:"Shampoo" }
]
   
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
               
            };
            case DELETE_ITEMS:
                return {
                    ...state,
                    items: state.items.filter(item =>item.id !==action.payload )
                };
            case ADD_ITEMS:
                return{
                    ...state,
                    items: [action.payload, ...state.items]
                }; 
               
            default:
                return state;
    }
}
