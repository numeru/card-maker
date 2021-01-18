import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA20l5-M5Fkpt2CSSThCOsB-wWbjPpzi_s",
  authDomain: "business-card-maker-b9349.firebaseapp.com",
  projectId: "business-card-maker-b9349",
  databaseURL: "https://business-card-maker-b9349-default-rtdb.firebaseio.com",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
