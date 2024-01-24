import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXB0Zq30UHZo1qbKEMS19iBi-qAds05oE",
  authDomain: "netflix-gpt-f8014.firebaseapp.com",
  projectId: "netflix-gpt-f8014",
  storageBucket: "netflix-gpt-f8014.appspot.com",
  messagingSenderId: "703641999028",
  appId: "1:703641999028:web:c4d25d5a2886ad1f5569e1",
  measurementId: "G-PTHN65FESL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();