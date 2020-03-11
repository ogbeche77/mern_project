import axios from "axios";

import {
    USER_LOADED,
    USER_LOADIND,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

//Check token & load user
export const loadUser = 
