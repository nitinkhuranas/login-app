import firebase from 'firebase/app';
import 'firebase/auth';
import store from './globalStore';
import * as loginActions from "./login/actions";

const configData = require("../../config");
const config = process.env.NODE_ENV === "production" ? configData.prod : configData.dev;

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

firebaseAuth.onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(loginActions.setIsAuthenticated(true));
  }
});

export default firebaseAuth;
