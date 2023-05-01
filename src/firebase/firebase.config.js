// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAigFrMkEnG_kw3Kcz4nxqKGvu6swEFgtM",
  authDomain: "dish-delight-project.firebaseapp.com",
  projectId: "dish-delight-project",
  storageBucket: "dish-delight-project.appspot.com",
  messagingSenderId: "668828280085",
  appId: "1:668828280085:web:d28324b085a2432f38751c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;