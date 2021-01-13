import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBbUXjNm2VJmb6Gk_O7GPmoOorOwMdJAMA",
  authDomain: "c-77-c9e43.firebaseapp.com",
  databaseURL: "https://c-77-c9e43.firebaseio.com",
  projectId: "c-77-c9e43",
  storageBucket: "c-77-c9e43.appspot.com",
  messagingSenderId: "955015791077",
  appId: "1:955015791077:web:90dd4c63985ce374d96f0c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase();