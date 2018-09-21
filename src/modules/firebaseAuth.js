import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
     apiKey: "AIzaSyDyTceYBrx-9Scf4J4syNKyGu9mc95Gxgg",
    authDomain: "sublime-state-146411.firebaseapp.com",
    databaseURL: "https://sublime-state-146411.firebaseio.com",
    projectId: "sublime-state-146411",
    storageBucket: "sublime-state-146411.appspot.com",
    messagingSenderId: "571825557320"
  };

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export default firebaseAuth;
