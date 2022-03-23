import Axios from "axios";
import{
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'
import { USER_SERVER } from '../componets/Config'

export function loginUser(dataTosubmit){
    
    const request = Axios.post(`${USER_SERVER}/login`, dataTosubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function logoutUser(){
    
    const request = Axios.get(`${USER_SERVER}/logout'`)
        .then(response => response.data)

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function registerUser(dataTosubmit){
    
    const request = Axios.post(`${USER_SERVER}/register'`, dataTosubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(){
    
    const request = Axios.get(`${USER_SERVER}/auth`)
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}