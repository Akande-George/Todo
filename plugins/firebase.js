import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB48PvdEcdCV4g068AE0Mk3uHuMvdJUf_k",
    authDomain: "todo-f9fd5.firebaseapp.com",
    databaseURL: "https://todo-f9fd5.firebaseio.com",
    projectId: "todo-f9fd5",
    storageBucket: "todo-f9fd5.appspot.com",
    messagingSenderId: "221527217",
    appId: "1:221527217:web:7aa3f52ec8106265593690"
  };

  if(!firebase.apps.length) {
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase
  
