import firebase from "firebase";

//paste config here...
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPEb0LZHgLkLdqqfrMnWznc8hBdDFym1o",
  authDomain: "pizza-delivery-app-42b63.firebaseapp.com",
  projectId: "pizza-delivery-app-42b63",
  storageBucket: "pizza-delivery-app-42b63.appspot.com",
  messagingSenderId: "451205348262",
  appId: "1:451205348262:web:aeb3f0091b909010efed67",
  measurementId: "G-J4S0Q8LGQ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
