import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBuJ-KjSNgCdUjol0a2gMpyFjdJCiqssAc",
    authDomain: "instagram-30079.firebaseapp.com",
    projectId: "instagram-30079",
    storageBucket: "instagram-30079.appspot.com",
    messagingSenderId: "527817845433",
    appId: "1:527817845433:web:64bd5a8f5ec7f7d8a98968"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export {firebase, FieldValue};