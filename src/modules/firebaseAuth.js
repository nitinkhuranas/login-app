import firebase from 'firebase/app';
import 'firebase/auth';

const configData = require("../../config");
const config = process.env.NODE_ENV === "production" ? configData.prod : configData.dev;

firebase.initializeApp(config);

const firebaseAuth = firebase.auth();

export default firebaseAuth;
