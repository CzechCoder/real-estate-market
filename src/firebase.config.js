import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqRjowtKstmbLR1LOBfQRxVMX6lburT0Y",
  authDomain: "house-marketplace-app-bb073.firebaseapp.com",
  projectId: "house-marketplace-app-bb073",
  storageBucket: "house-marketplace-app-bb073.appspot.com",
  messagingSenderId: "471743687051",
  appId: "1:471743687051:web:c9210c6be80740e58b278e",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
