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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return  // cancel if the user is not logged in

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName, photoURL } = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userRef;

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" })
facebookProvider.setCustomParameters({ prompt: "select_account" })


export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);


export default firebase;