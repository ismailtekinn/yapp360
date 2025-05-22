// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_49Sq1IAu5dcYT8u08nSVYkuPjmGK_Mk",
  authDomain: "yapp360-beedd.firebaseapp.com",
  projectId: "yapp360-beedd",
  storageBucket: "yapp360-beedd.appspot.com",
  messagingSenderId: "478047482775",
  appId: "1:478047482775:web:c0f36a81dcc22ba384cad2",
  measurementId: "G-XFYT0BPDKB",
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}
export { app, db, analytics };