import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2w11ApgXavWFg9KZ1acSo88KhN7vdsc4",
  authDomain: "food-app-1a40f.firebaseapp.com",
  projectId: "food-app-1a40f",
  storageBucket: "food-app-1a40f.appspot.com",
  messagingSenderId: "982968305561",
  appId: "1:982968305561:web:6c464922a688e04172f508",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
