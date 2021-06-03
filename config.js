import * as firebase from "firebase"
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDOsfKYquL0gHVZif_w5oUGAd6MatxzWB8",
    authDomain: "library-edd3f.firebaseapp.com",
    projectId: "library-edd3f",
    storageBucket: "library-edd3f.appspot.com",
    messagingSenderId: "726360678421",
    appId: "1:726360678421:web:8125e6955fa19b518f2e1c"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()