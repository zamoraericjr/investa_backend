import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;


export default {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
 
};