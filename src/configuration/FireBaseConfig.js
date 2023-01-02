// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3OT_yUqwikX-15QsqIPXk3dF5aYoPnnM",
  authDomain: "vfood-15ced.firebaseapp.com",
  databaseURL: "https://vfood-15ced-default-rtdb.firebaseio.com",
  projectId: "vfood-15ced",
  storageBucket: "vfood-15ced.appspot.com",
  messagingSenderId: "606989823433",
  appId: "1:606989823433:web:4859dcf1373c67c162cc18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export {app, auth};