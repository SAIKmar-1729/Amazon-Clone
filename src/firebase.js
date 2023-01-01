import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtBhu2rrczKy7FCcvGcWsploz_wCdbhSI",
  authDomain: "clone-98e5f.firebaseapp.com",
  projectId: "clone-98e5f",
  storageBucket: "clone-98e5f.appspot.com",
  messagingSenderId: "402613192126",
  appId: "1:402613192126:web:88909fe831db8a8d0e25ef",
  measurementId: "G-RTKV7YJ2TE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };