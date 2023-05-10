// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfcwKkB-mNM5LWgjWQPRjX-sFQHs1A1Y",
  authDomain: "enc-app-3b266.firebaseapp.com",
  projectId: "enc-app-3b266",
  storageBucket: "enc-app-3b266.appspot.com",
  messagingSenderId: "665137352333",
  appId: "1:665137352333:web:bafcfeb459863413be5cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;