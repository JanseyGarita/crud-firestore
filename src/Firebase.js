import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsFAqdgSGuVyEsaT4n7Pju7-o-0qyLNNM",
  authDomain: "crud-carros.firebaseapp.com",
  databaseURL: "https://crud-carros.firebaseio.com",
  projectId: "crud-carros",
  storageBucket: "crud-carros.appspot.com",
  messagingSenderId: "452977836710",
  appId: "1:452977836710:web:e271e960ce03e55a03aa67",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
