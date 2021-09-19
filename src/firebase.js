import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKZyZtugIQ2aFLfPQ8iXIrcTf01Jh6IlM",
  authDomain: "resume-7258e.firebaseapp.com",
  databaseURL: "https://resume-7258e-default-rtdb.firebaseio.com",
  projectId: "resume-7258e",
  storageBucket: "resume-7258e.appspot.com",
  messagingSenderId: "303477769216",
  appId: "1:303477769216:web:4edb55f964169b9cfb84e5"
};

firebase.initializeApp(firebaseConfig);
// export const r=firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
export const r = storage.ref();