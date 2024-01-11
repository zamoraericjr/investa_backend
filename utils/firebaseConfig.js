import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import config from "./config.js";

const firebaseConfig1 = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.FIREBASE_APP_ID,
};

const firebaseConfig = {
    apiKey: "AIzaSyCBuQ3j53Vd9Ur2mLBGfwIZGpMBPpfvGUk",
    authDomain: "investa-storage.firebaseapp.com",
    projectId: "investa-storage",
    storageBucket: "investa-storage.appspot.com",
    messagingSenderId: "1082020122338",
    appId: "1:1082020122338:web:b5b0d15c36132c4a4a98bb"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;