import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyATuLcwSodqeLq2ITO-NgZCgZSpSkq6hws",
    authDomain: "disney-plus-clone-92b43.firebaseapp.com",
    projectId: "disney-plus-clone-92b43",
    storageBucket: "disney-plus-clone-92b43.appspot.com",
    messagingSenderId: "697849146186",
    appId: "1:697849146186:web:4d148502ab29e7fb156fb3",
    measurementId: "G-F885TZM093"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, googleProvider, storage };
export default db;