//Handle all the authentication logic
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = {email: ''};

export default (state = INITIAL_STATE , action) => {
    switch (action.type) {

        case EMAIL_CHANGED: 
            return { ...state, email: action.payload }; 
            //Make new object with all the old state, and include email data

        default:
            return state;
    }
}