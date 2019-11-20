import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW08Ve8Ih3jbXT411J6UtO1mwSRFMbUhA",
  authDomain: "school-supplies-devy.firebaseapp.com",
  databaseURL: "https://school-supplies-devy.firebaseio.com",
  projectId: "school-supplies-devy",
  storageBucket: "school-supplies-devy.appspot.com",
  messagingSenderId: "180725496656",
  appId: "1:180725496656:web:346e20c5c8a947c936ca55"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
