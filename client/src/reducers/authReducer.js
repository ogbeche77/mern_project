import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from "../actions//types";

  const initialState = {
      token: localStorage.getItem("token"),
      isAuthenticated: null,
      isLoading: false,
      user: null
  };

  export default function(state = initialState, action){
      switch(action.type){
          case USER_LOADING: //point of getting user from backend to getting the user
              return{
                  ...state,
                  isLoading: true
              };
              case USER_LOADED: //will run always to check whether user is logged in
                  return{
                      ...state,
                      isAuthenticated: true,
                      isLoading: false,
                      user: action.payload
                  };

                  case LOGIN_SUCCESS:
                  case REGISTER_SUCCESS:
                      localStorage.setItem("token", action.payload.token);
                    return{
                        ...state,
                        ...action.payload,
                        isAuthenticated: true,
                        isLoading: false   
                    };
                    //should any of the cases below occur, it should retutn {}
                    case AUTH_ERROR:
                     case LOGIN_FAIL:
                     case LOGOUT_SUCCESS:
                     case REGISTER_FAIL:
                         localStorage.removeItem("token");
                         return {
                             ...state,
                             token: null,
                             user: null,
                             isAuthenticated: false,
                             isLoading: false
                         }
                         default:
                             return state;

      }
  }