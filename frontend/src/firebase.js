import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuR82uBQYJdLgeULp-ddFdRQUh9eiwVp4",
  authDomain: "wsmob-99dec.firebaseapp.com",
  projectId: "wsmob-99dec",
  storageBucket: "wsmob-99dec.firebasestorage.app",
  messagingSenderId: "1005276984969",
  appId: "1:1005276984969:web:c936e95e03ff32d5fe3858",
  measurementId: "G-8BDBC6JWYM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };