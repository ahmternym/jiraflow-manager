import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDpZ8opFputh7Ju8m73ObiMrDwvI2f37k0",
  authDomain: "jira-69274.firebaseapp.com",
  projectId: "jira-69274",
  storageBucket: "jira-69274.firebasestorage.app",
  messagingSenderId: "772815074333",
  appId: "1:772815074333:web:ccf94a87e257244cfdc2f4",
  measurementId: "G-38B2JBVB7S"
};
initializeApp(firebaseConfig);

const DB = getFirestore()

export {DB}