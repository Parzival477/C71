import * as firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCMums9pXMGZsigwgkUkJtUGxzZkdz12uY",
    authDomain: "wily-a7ea2.firebaseapp.com",
    projectId: "wily-a7ea2",
    storageBucket: "wily-a7ea2.appspot.com",
    messagingSenderId: "518905440928",
    appId: "1:518905440928:web:b36ef47a90e49dd527b7c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()