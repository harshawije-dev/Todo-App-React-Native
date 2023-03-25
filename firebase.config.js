import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCotc-hBsPtPaWr7xPmDp_S0m_rGiHKDlw",
  authDomain: "mobile-app-base.firebaseapp.com",
  databaseURL:
    "https://mobile-app-base-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mobile-app-base",
  storageBucket: "mobile-app-base.appspot.com",
  messagingSenderId: "259364730955",
  appId: "1:259364730955:web:c9be6c34ccb3113d10b5ce",
};

export const app = initializeApp(config);
export const firestore = getFirestore(app);
export const collectionRef = collection(firestore, "tasks");
