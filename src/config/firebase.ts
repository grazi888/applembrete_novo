import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDoTRWkNaCs7eL0kYEdKq1TfGIVBjarzo",
  authDomain: "lembreteapp-44229.firebaseapp.com",
  projectId: "lembreteapp-44229",
  storageBucket: "lembreteapp-44229.firebasestorage.app",
  messagingSenderId: "275675074353",
  appId: "1:275675074353:web:8d66f4ca0b23008ecf2a10",
  measurementId: "G-49YYQZ9M8S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);