// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXdM-5I_4dYvizmPQhF_-Ih-gTM5_qhY",
  authDomain: "stackweb-e4185.firebaseapp.com",
  projectId: "stackweb-e4185",
  storageBucket: "stackweb-e4185.appspot.com",
  messagingSenderId: "889915169165",
  appId: "1:889915169165:web:25112df2beef7e815245c4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;