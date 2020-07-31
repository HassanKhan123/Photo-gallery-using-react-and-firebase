import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBA8j0M3zVjZGN_p5tKcC5pxCy1WChXz7M",
  authDomain: "firegram-react-firebase.firebaseapp.com",
  databaseURL: "https://firegram-react-firebase.firebaseio.com",
  projectId: "firegram-react-firebase",
  storageBucket: "firegram-react-firebase.appspot.com",
  messagingSenderId: "74618391907",
  appId: "1:74618391907:web:31639c7c707974b7791756",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore,timestamp };
