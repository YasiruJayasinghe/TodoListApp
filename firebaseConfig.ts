import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0ndgS8scEAIh1gNNNim-ottiecTYXxMU",
    authDomain: "todolistapp-227b6.firebaseapp.com",
    projectId: "todolistapp-227b6",
    storageBucket: "todolistapp-227b6.appspot.com",
    messagingSenderId: "557664234735",
    appId: "1:557664234735:web:ac0b3069b0de96a7503f1a"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);