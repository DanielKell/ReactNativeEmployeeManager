//Handle all the authentication logic
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: ''
};
//Define empty string to inform others what this reducer is responsible for

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {

        case EMAIL_CHANGED: 
            return { ...state, email: action.payload }; 
            //Make new object with all the old state, and include email data
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};

        default:
            return state;
    }
}