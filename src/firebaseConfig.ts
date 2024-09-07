import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDfeL4KAxexFMKQ4szoW15RQ_Bfg5WHolE",
  authDomain: "site-de-jogos-29ac5.firebaseapp.com",
  projectId: "site-de-jogos-29ac5",
  storageBucket: "site-de-jogos-29ac5.appspot.com",
  messagingSenderId: "348516107829",
  appId: "1:348516107829:web:f08f11efe6ea2362cfd37c",
  measurementId: "G-16960BDBRB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);
