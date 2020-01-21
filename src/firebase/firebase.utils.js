import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBVEbR-jPVzI-8nEgFr4Gp4e1noVhfzi98",
  authDomain: "crwn-db-56d09.firebaseapp.com",
  databaseURL: "https://crwn-db-56d09.firebaseio.com",
  projectId: "crwn-db-56d09",
  storageBucket: "crwn-db-56d09.appspot.com",
  messagingSenderId: "1095762279043",
  appId: "1:1095762279043:web:cd50edcb526dd77b36b9b6",
  measurementId: "G-D8D9QGH1VZ"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider;
provider.setCustomParameters({ prompt: "select_account" })

export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;