import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA20l5-M5Fkpt2CSSThCOsB-wWbjPpzi_s",
  authDomain: "business-card-maker-b9349.firebaseapp.com",
  projectId: "business-card-maker-b9349",
  databaseURL: "https://business-card-maker-b9349-default-rtdb.firebaseio.com",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
