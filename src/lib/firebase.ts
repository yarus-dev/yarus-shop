import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsKqoIMBlbPFxfpvB9kVHoDoaV_EYzP8g",
  authDomain: "yarus-shop-firebase.firebaseapp.com",
  projectId: "yarus-shop-firebase",
  storageBucket: "yarus-shop-firebase.appspot.com",
  messagingSenderId: "468323537565",
  appId: "1:468323537565:web:24d321b72c78a79f2bba74",
  measurementId: "G-3446CF9X44"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}

export {
  app,
  analytics
};