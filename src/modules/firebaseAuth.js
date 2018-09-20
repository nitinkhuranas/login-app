import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export default firebaseAuth;