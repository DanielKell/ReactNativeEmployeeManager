import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

componentWillMount() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDF0eNZ479LgdN7s3lc9w-lSIzgqqZfCp0",
    authDomain: "employee-manager-261c7.firebaseapp.com",
    databaseURL: "https://employee-manager-261c7.firebaseio.com",
    projectId: "employee-manager-261c7",
    storageBucket: "employee-manager-261c7.appspot.com",
    messagingSenderId: "1007012453282"
  };
  firebase.initializeApp(config);
}

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}> 
                <LoginForm />  
            </Provider>
        );
    }
}

export default App;