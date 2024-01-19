import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import config from "./config.js";

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