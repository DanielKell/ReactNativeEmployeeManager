//Handle all the authentication logic
import { EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: ''
};
//Define empty string to inform others what this reducer is responsible for

export default (state = INITIAL_STATE , action) => {
    console.log(action);
    switch (action.type) {

        case EMAIL_CHANGED: 
            return { ...state, email: action.payload }; 
            //Make new object with all the old state, and include email data
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: ''};
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: ''};

        default:
            return state;
    }
}