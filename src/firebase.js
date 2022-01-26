import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAAc_2huFsGisefUuna2Vd_lRI7FdH2ww",
  authDomain: "tinder-clone-b24f0.firebaseapp.com",
  projectId: "tinder-clone-b24f0",
  storageBucket: "tinder-clone-b24f0.appspot.com",
  messagingSenderId: "828997679388",
  appId: "1:828997679388:web:9491fe2578c752d57c22d9",
  measurementId: "G-24HXZHBZK3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()

export default database