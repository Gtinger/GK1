import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

//her er firebase konfigurationen 
const firebaseConfig = {
    apiKey: "AIzaSyD4gLJ0Lq_mIp7WIOHKmihmxfwSKJMHZu4",
    authDomain: "vilkarligtnavn.firebaseapp.com",
    databaseURL: "https://vilkarligtnavn-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vilkarligtnavn",
    storageBucket: "vilkarligtnavn.appspot.com",
    messagingSenderId: "366814670063",
    appId: "1:366814670063:web:76a67ed1ee9fef14027f1a"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};

  